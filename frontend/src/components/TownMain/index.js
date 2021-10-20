import React, { useRef, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useSocket } from '../../hooks/useSocket';
import { myLocation, otherLocations } from '../../store/locations';
import { userAtom } from '../../store/user';

const direction = {
    "down": 32,
    "left": 128,
    "right": 320,
    "up": 224
}
const Div = styled.div`
    height: 100vh;
    max-height: 100vh;
    flex-grow: 1;
    display: block;
`;
const Canvas = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`



export default function TownMain(props) {
    const canvasRef = useRef(null);
    const [location, setLocation] = useRecoilState(myLocation);
    const [otherLocation,setOtherLocation] = useRecoilState(otherLocations);
    const user = useRecoilValue(userAtom);

    const mapImg = new Image();
    const characterImg = new Image();
    mapImg.src = "/map.png";
    characterImg.src = "/avatar.png";
    
    const draw = (canvas, ctx, frameCount) => {
        const width = canvas.width;
        const height = canvas.height;
        // 픽셀 정리
        ctx.clearRect(0, 0, width, height);
        // 컨텍스트 리셋
        ctx.beginPath();
        //draw map
        ctx.drawImage(mapImg, location.x - width / 8 + 32, location.y - height / 8, width / 4, height / 4, 0, 0, width, height);
        //draw my character
        ctx.drawImage(characterImg, direction[location.direction] + 32 * location.toggle, 0, 32, 64, width / 2 - 64, height / 2, 32, 64);
        //draw other character
        Object.keys(otherLocation).forEach((nickname) => {
            const others = otherLocation[nickname];
            ctx.drawImage(characterImg, direction[others.direction] + 32 * others.toggle, 0, 32, 64, others.x - location.x + width / 2 - 64, others.y - location.y + height / 2, 32, 64);
        })
    }
    
    const sendLocation = props.sendSocket;

    const move = (event) => {
        const toggle = location.toggle;

        if (event.key == "ArrowDown") 
            setLocation({ x: location.x, y: location.y + 2 , direction: "down", toggle:(toggle+1)%2});
        else if (event.key == "ArrowUp") 
            setLocation({ x: location.x, y: location.y - 2 , direction: "up", toggle:(toggle+1)%2});
        else if (event.key == "ArrowRight") 
            setLocation({ x: location.x + 2, y: location.y , direction: "right", toggle:(toggle+1)%2});
        else if (event.key == "ArrowLeft") 
            setLocation({ x: location.x - 2, y: location.y , direction: "left", toggle:(toggle+1)%2});

        sendLocation({ nickname: user.nickname, x: location.x, y: location.y, direction: location.direction, toggle: location.toggle, type: "move" });
        document.addEventListener("keyup",stopMove,{once: true})
    }
    
    const stopMove = () => {
        setLocation({ x: location.x, y: location.y , direction: location.direction, toggle:-1});
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
            <Canvas
                // width={window.innerWidth}
                // height={window.innerHeight-1}
                ref={canvasRef}
            />
        </Div>
    
            
    )
}