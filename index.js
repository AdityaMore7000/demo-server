import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();
app.use(cors({
    origin:process.env.ORIGIN
}));
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({msg:'Connected to backend'})
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})