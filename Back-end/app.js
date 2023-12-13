import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import sequelize from 'sequelize'
import db from './models/index.js'
import {articleRoutes} from './Routes/ArticleRoutes.js'
dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())


try{
    app.listen(process.env.DB_PORT, () => { 
        console.log(`Server is running on port ${process.env.DB_PORT}`)
        })

        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');

        console.log('Database synced!');
    } catch(error) { 
        console.error(error)
    }
    app.get('/',(req,res)=>{
        res.json("Hello World")
    })
    
    app.use('/article',articleRoutes)
    app.use('/images',express.static('images'));