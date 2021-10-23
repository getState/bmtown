export const Avatar = ["/avatar1.png", "/avatar2.png", "/avatar3.png"]

const Direction = Object.freeze({
    "down": 32,
    "left": 128,
    "right": 320,
    "up": 224
});

const AvatarWidth = 32;
const AvatarHeight = 64;

export const Interval = 16;

export const drawMyAvatar = (canvas, context,location, user) => {
    const CanvasWidth = canvas.width;
    const CanvasHeight = canvas.height;
    
    const characterImg = new Image();
    characterImg.src = Avatar[location.avatar];
    
    context.drawImage(characterImg,
        Direction[location.direction] + AvatarWidth * Math.floor(location.toggle / (Interval / 2)), 0,
        AvatarWidth, AvatarHeight,
        CanvasWidth / 2, CanvasHeight / 2,
        AvatarWidth, AvatarHeight);
}

export const drawOtherAvatars = (canvas, context, otherLocations, location, user) => {
    const CanvasWidth = canvas.width;
    const CanvasHeight = canvas.height;
    otherLocations.forEach((others, nickname) => {
        if (user.nickname !== nickname) {
            const characterImg = new Image();
            characterImg.src = Avatar[others.avatar];

            context.drawImage(characterImg,
                Direction[others.direction] + 32 * Math.floor(others.toggle / (Interval / 2)), 0,
                AvatarWidth, AvatarHeight,
                others.x - location.x + CanvasWidth / 2, others.y - location.y + CanvasHeight / 2,
                AvatarWidth, AvatarHeight);
        }
    })
}

//충돌 처리
export function isCollision(user,myLocation, otherLocation) {
    const x = myLocation.x;
    const y = myLocation.y;
    let result = false;
    otherLocation.forEach((location) => {
        if (location.nickname!==user.nickname && Math.abs(x - location.x) < 16 && Math.abs(y - location.y) < 32) {
            result = true;
        }
    })
    return result;
}