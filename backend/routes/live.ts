

let users = {};
let socketToRoom = {};
let count = 0;
const maximum = 2;

export const liveStart = (io) => {
    console.log("io start");
    io.sockets.on('connection', (socket) => {
        console.log(`${socket.id} Connected`);
        

        socket.on('sendMessage', (msg) => {
            console.log(msg);
            const data = {id : socket.id, msg};
            io.emit('respondMessage', msg);
        })

        socket.on('disconnect', () => {
            console.log(`${socket.id} disconnected`);
        })

    })
    
}