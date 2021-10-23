import React, {useEffect, useRef, useState} from "react";
import { VideoContainer } from "./style";

export default function Video(props){
    const {stream, muted} = props
    const ref = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    useEffect(() => {
        if (ref.current) ref.current.srcObject = stream;
        if (muted) setIsMuted(muted);
    })

    return (
        <VideoContainer 
            ref={ref}
            muted={isMuted}
            autoPlay
        ></VideoContainer>
    );
}