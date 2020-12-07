class Sockets{
    constructor(io){
        this.io = io
        this.socketEvents()
    }

    socketEvents(){
        this.io.on("connection",(socket)=>{
            
            socket.on("message",(message)=>{
                this.io.emit("message-from-server",message)
                console.log('message',message)
            })
        
        })
    }
}

module.exports  = Sockets