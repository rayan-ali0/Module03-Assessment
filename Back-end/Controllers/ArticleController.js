import express from 'express'
import db from '../models/index.js'

const { ArticleModel } = db

export const createArticle = async (req, res) => {
    const { title, category, body, author } = req.body
    const image=req.file.path
    try {

        const article = await ArticleModel.create({
            image, title, category, body, author
        })
        if (article) {
            res.status(200).json(article)
        }
    }
    catch (error) {
        res.status(500).json(`Error creating article ${error.message}`)
    }
}

export const getAll = async (req, res) => {

    try {
        const articles = await ArticleModel.findAll()
        if (articles) {
            res.status(200).json(articles)
        }
    }
    catch (error) {
        res.status(500).json(`Error reading articles ${error.message}`)
    }
}

export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const article = await ArticleModel.findByPk(id)
        if (article) {
            res.status(200).json(article)
        }
        res.status(404).json('article not found')
    }
    catch (error) {
        res.status(500).json(`Error reading articles ${error.message}`)
    }
}


export const deleteArticle = async (req, res) => {
    const { id } = req.params
    try {
        const article = await ArticleModel.destroy({ where: { id: id } })
        if (article) {
            res.status(200).json(article)
        }
    }
    catch (error) {
        res.status(500).json(`Error reading articles ${error.message}`)
    }

}

export const updateArticle = async (req, res) => {
    const { id } = req.params
    const { image, title, category, body, author } = req.body
    try {

        const article = await ArticleModel.findByPk(id)
        if(article){
image? article.image=image:null,
title? article.title=title:null,
category? article.category=category:null,
body? article.body=body:null,
author? article.author=author:null

article.save()

res.status(200).json(article)

        }
        else{
            res.status(404).json('Article Not found')
        }

    }
    catch (error) {
        res.status(500).json(`Error reading articles ${error.message}`)
    }
}