import express, { Request, Response } from "express"
import Sender from "./sender";

const sender = new Sender()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/status", (req: Request, res: Response) => {
    res.json({status: 200})
})

app.post("/send", async (req: Request, res: Response) => {

    const { number, message} = req.body

    try {
        await sender.sendText(number, message)
        res.json({status: 200})
    } catch (err){
        console.error(err)
        res.status(500).json({ status: "error", message: err})
    }
})

app.listen(5000, () => {
    console.log('Server started on 5000')
})