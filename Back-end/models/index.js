import { Sequelize } from "sequelize";
import dotenv  from "dotenv"
import Article from './article.js'
import User from './user.js'
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: 'mysql'
  }
);


const ArticleModel=Article(sequelize,Sequelize)
const UserModel=User(sequelize,Sequelize)
const db={
  sequelize,
  Sequelize,
  ArticleModel,
  UserModel
}

export default db



