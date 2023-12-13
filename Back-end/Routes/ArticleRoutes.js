import express from 'express'
import {createArticle,getAll,getById,deleteArticle,updateArticle} from '../Controllers/ArticleController.js'
import upload from '../middlewars/multer.js'
export  const articleRoutes=express.Router()

articleRoutes.post('/create',upload.single("image"),createArticle)
articleRoutes.get('/readAll',getAll)
articleRoutes.get('/read/:id',getById)
articleRoutes.delete('/delete/:id',deleteArticle)
articleRoutes.put('/update/:id',updateArticle)