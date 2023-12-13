import React from 'react'
import Cards from '../../Components/Cards'
import styles from './Articles.module.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
export const Articles = () => {
const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)

const fetchArticle=async(req,res)=>{
try{
const response=await axios.get(`${process.env.REACT_APP_PATH}/article/readAll`)
if(response){
  setArticles(response.data)
  console.log(response.data)
  setLoading(false)
}
else{
  console.log('Error Fetching Articles')

  setLoading(false)
}
}
catch(error){
  console.log(error.message)
  setLoading(false)
}
}

useEffect(()=>{
fetchArticle()
},[])

  return (
    <main className={styles.mainPage} >
      <h1 className={styles.articlesTitle}>Articles</h1>
        {
          !loading?
          (
            <section className={styles.cardsPage}>
              {
                articles.map((article,index)=>(
                  <Cards  key={index} article={article} onDelete={fetchArticle}/>

                ))
              }
     
      </section>

          )
          :
          (
            <section className={styles.cardsPage}>

            <h1>loading...</h1>
            </section>
          )
        }
     
    
    </main>
  )
}
