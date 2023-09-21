import express from "express"
import cors from "cors"
import {config} from "dotenv"

const app = express()
app.use(cors())
config()


const port = process.env.PORT ||3000


app.listen(port, ()=>{
    console.log(`Puerto por http://localhost:${port}`);
})