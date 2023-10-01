import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();
app.use(cors({
    origin:'http://localhost:5173'
}));
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({msg:'Connected to backend'})
})

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
})