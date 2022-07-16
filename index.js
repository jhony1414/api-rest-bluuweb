
import 'dotenv/config'
import './database/connectdb.js'
import authRoutes from './routes/auth.routes.js'
import express from 'express'




const port = process.env.PORT || 3333
const app = express()









app.use(express.json())
app.use( '/api/v1', authRoutes )

app.listen(port, ()=>{
    console.log(`💻  👍🏼 Servidor en: http://localhost:${port}`);
})