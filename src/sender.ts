import { start } from "repl";
import {create, Whatsapp, Message, SocketState } from "venom-bot"

class Sender{
    private client: any

    constructor(){
        this.initialize()
    }

    async sendText(to:string, body: string){
        // format 5511984708101@c.us
        await this.client.sendText(to, body)
    }

    private initialize() {

        const qr = (base64Qrimg: string) => {}
        const status = (statusSession: string) => {}
        const start = (client: Whatsapp) => {
            this.client = client
        }

        create("ws-sender-dev", qr, status)
            .then((client) => start(client))
            .catch((err) => console.error(err))
    }
}

export default Sender