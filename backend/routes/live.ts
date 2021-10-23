let users = [];
let socketToRoom = {};
let count = 0;
const maximum = 2;

export const liveStart = (io) => {
    console.log("io start");
    io.sockets.on('connection', (socket) => {
        console.log(`${socket.id} Connected`);

        socket.on('join', () => {
            console.log("join!!");
            users.push(socket.id);
            io.sockets.to(socket.id).emit('all_users', users);
        })
        socket.on('sendMessage', (msg) => {
            console.log(msg);
            const data = { id: socket.id, msg };
            io.emit('respondMessage', msg);
        })

        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnected`);
            users = users.filter(user => user !== socket.id);
            io.emit('user_exit', {id: socket.id});
            console.log(users);
        })


        socket.on('offer', data => {
            socket.to(data.offerReceiveID).emit('getOffer', {sdp: data.sdp, offerSendID: data.offerSendID});
        });
        socket.on('answer', data => {
            socket.to(data.answerReceiveID).emit('getAnswer', {sdp: data.sdp, answerSendID: data.answerSendID});
        });
        socket.on('candidate', data => {
            socket.to(data.candidateReceiveID).emit('getCandidate', {candidate: data.candidate, candidateSendID: data.candidateSendID});
        })
    })
    
}