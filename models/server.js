const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const path = require("path")
const Sockets = require("./sockets")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //http server

        this.server = http.createServer(this.app)

        //configruaciones de sockets

        this.io =  socketio(this.server)
    }

    middleware(){
        this.app.use(express.static(path.resolve(__dirname,"../public")))
    }


    configureSockets(){
        new Sockets(this.io)
    }

    execute(){
        this.middleware();

        this.configureSockets()

        this.server.listen(this.port,()=>{
            console.log('server corriendo en Puerto ',this.port)
        })
    }
}

module.exports = Server
