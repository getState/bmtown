import React, { useRef, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { myLocation, otherLocations } from '../../store/locations';
import { userAtom } from '../../store/user';
import { Canvas, Div } from './style';
import { drawMyAvatar, drawOtherAvatars, Interval, isCollision } from './utils';
import Videos from "../VideoList";


export default function TownMain(props) {
    const canvasRef = useRef(null);
    const [location, setLocation] = useRecoilState(myLocation);
    const [otherLocation,setOtherLocation] = useRecoilState(otherLocations);
    const user = useRecoilValue(userAtom);
    const videoShow = props.videoShow;
    const socketRef = props.socketRef;

    const mapImg = new Image();
    mapImg.src = "/map.png";
    
    const draw = (canvas, ctx, frameCount) => {
        const width = canvas.width;
        const height = canvas.height;
        // 픽셀 정리
        ctx.clearRect(0, 0, width, height);
        // 컨텍스트 리셋
        ctx.beginPath();
        //draw map
        ctx.drawImage(mapImg, location.x, location.y, width, height, 0, 0, width, height);
        //draw other character
        drawOtherAvatars(canvas, ctx,otherLocation, location, user);
        //draw my character
        drawMyAvatar(canvas, ctx,location, user);
    }
    
    const sendLocation = props.sendSocket;

    const move = (event) => {
        const toggle = location.toggle;

        if (event.key === "ArrowDown" && !isCollision(user,{x:location.x, y:location.y+4},otherLocation)) 
            setLocation({ x: location.x, y: location.y + 2 , direction: "down", avatar: location.avatar,toggle:(toggle+1)%Interval});
        else if (event.key === "ArrowUp"&& !isCollision(user,{x:location.x, y:location.y-4},otherLocation)) 
            setLocation({ x: location.x, y: location.y - 2 , direction: "up", avatar: location.avatar,toggle:(toggle+1)%Interval});
        else if (event.key === "ArrowRight"&& !isCollision(user,{x:location.x+4, y:location.y},otherLocation)) 
            setLocation({ x: location.x + 2, y: location.y , direction: "right", avatar: location.avatar,toggle:(toggle+1)%Interval});
        else if (event.key === "ArrowLeft"&& !isCollision(user,{x:location.x-4, y:location.y},otherLocation)) 
            setLocation({ x: location.x - 2, y: location.y , direction: "left", avatar: location.avatar,toggle:(toggle+1)%Interval});

        sendLocation({ nickname: user.nickname,  type: "move" ,...location});
        document.addEventListener("keyup",stopMove,{once: true})
    }
    
    const stopMove = () => {
        setLocation({ x: location.x, y: location.y , direction: location.direction, avatar: location.avatar,toggle:-Interval/2});
    }

    useEffect(() => {
        document.addEventListener("keydown", move);
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameNum = 0;
        let frameId = 0;

        const render = () => {
            frameNum++;
            draw(canvas, context, frameNum);
            frameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(frameId);
            document.removeEventListener("keydown", move);
        }
    }, [draw]);
    return (
        <Div>
            {videoShow && <Videos socketRef={socketRef}/>}
            <Canvas
                width={window.innerWidth}
                height={window.innerHeight}
                ref={canvasRef}
            />
        </Div>        
    )
}