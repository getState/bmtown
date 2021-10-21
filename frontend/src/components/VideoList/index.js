import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { Container, MyVideo, VideoContainer } from './style';
import Video from "./Video";


export default function Videos(props){
    const socketRef = props.socketRef;
    const pcsRef = useRef({});
    const localVideoRef = useRef(null);
    const localStreamRef = useRef();
    const [users, setUsers] = useState([]);
    const getLocalStream = useCallback(async () => {
        try {
            const localStream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    width: 280,
                    height: 200,
                },
            });
            
            localStreamRef.current = localStream;
            socketRef.current.emit("join");
            if (localVideoRef.current) localVideoRef.current.srcObject = localStream;
            if (!socketRef.current) return;
        } catch (e) {
            console.log(`getUserMedia error: ${e}`);
        }
    }, []);

    const createPeerConnection = useCallback((socketID) => {
        try {
            const pc = new RTCPeerConnection(pc_config);

            pc.onicecandidate = (e) => {
                if (!(socketRef.current && e.candidate)) return;
                console.log('onicecandidate');
                socketRef.current.emit('candidate', {
                    candidate: e.candidate,
                    candidateSendID: socketRef.current.id,
                    candidateReceiveID: socketID,
                });
            };

            pc.oniceconnectionstatechange = (e) => {
                console.log(e);
            };

            pc.ontrack = (e) => {
                console.log('ontrack success');
                setUsers((oldUsers) =>
                    oldUsers
                        .filter((user) => user.id !== socketID)
                        .concat({
                            id: socketID,
                            stream: e.streams[0],
                        }),
                );
            };

            if (localStreamRef.current) {
                console.log('localstream add');
                localStreamRef.current.getTracks().forEach((track) => {
                    if (!localStreamRef.current) return;
                    pc.addTrack(track, localStreamRef.current);
                });
            } else {
                console.log('no local stream');
            }

            return pc;
        } catch (e) {
            console.error(e);
            return undefined;
        }
    }, []);

    useEffect(() => {
        getLocalStream();
        
        socketRef.current.on('all_users', (allUsers) => {
            console.log("all_users", allUsers);
            allUsers.forEach(async (userID) => {
                console.log("localstream", localStreamRef.current);
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(userID);
                if (!(pc && socketRef.current)) return;
                pcsRef.current = { ...pcsRef.current, [userID]: pc };
                try {
                    const localSdp = await pc.createOffer({
                        offerToReceiveAudio: true,
                        offerToReceiveVideo: true,
                    });
                    console.log('create offer success');
                    await pc.setLocalDescription(new RTCSessionDescription(localSdp));
                    socketRef.current.emit('offer', {
                        sdp: localSdp,
                        offerSendID: socketRef.current.id,
                        offerSendEmail: 'offerSendSample@sample.com',
                        offerReceiveID: userID,
                    });
                } catch (e) {
                    console.error(e);
                }
            });
        });

        socketRef.current.on(
            'getOffer',
            async (data) => {
                const { sdp, offerSendID} = data;
                console.log('get offer');
                if (!localStreamRef.current) return;
                const pc = createPeerConnection(offerSendID);
                if (!(pc && socketRef.current)) return;
                pcsRef.current = { ...pcsRef.current, [offerSendID]: pc };
                try {
                    await pc.setRemoteDescription(new RTCSessionDescription(sdp));
                    console.log('answer set remote description success');
                    const localSdp = await pc.createAnswer({
                        offerToReceiveVideo: true,
                        offerToReceiveAudio: true,
                    });
                    await pc.setLocalDescription(new RTCSessionDescription(localSdp));
                    socketRef.current.emit('answer', {
                        sdp: localSdp,
                        answerSendID: socketRef.current.id,
                        answerReceiveID: offerSendID,
                    });
                } catch (e) {
                    console.error(e);
                }
            },
        );

        socketRef.current.on(
            'getAnswer',
            (data) => {
                const { sdp, answerSendID } = data;
                console.log('get answer');
                const pc = pcsRef.current[answerSendID];
                if (!pc) return;
                pc.setRemoteDescription(new RTCSessionDescription(sdp));
            },
        );

        socketRef.current.on(
            'getCandidate',
            async (data) => {
                console.log('get candidate');
                const pc = pcsRef.current[data.candidateSendID];
                if (!pc) return;
                await pc.addIceCandidate(new RTCIceCandidate(data.candidate));
                console.log('candidate add success');
            },
        );

        socketRef.current.on('user_exit', (data) => {
            if (!pcsRef.current[data.id]) return;
            pcsRef.current[data.id].close();
            delete pcsRef.current[data.id];
            setUsers((oldUsers) => oldUsers.filter((user) => user.id !== data.id));
        });

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
            }
            users.forEach((user) => {
                if (!pcsRef.current[user.id]) return;
                pcsRef.current[user.id].close();
                delete pcsRef.current[user.id];
            });
        };
    }, [createPeerConnection, getLocalStream]);
    return (
        <Container>
            <MyVideo
                muted
                ref={localVideoRef}
                autoPlay
            />
            
            {users.map((user, index) => (
                <Video key={index} stream={user.stream} />
            ))}
        </Container>
    );
};

const pc_config = {
    "iceServers": [{
        urls : 'stun:localhost.com:5000'
    }]
}
    