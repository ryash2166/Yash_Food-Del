import express from 'express'
import { addToCart, getCart, removeToCart } from '../controllers/CartController.js'
import authMiddleware from '../middleware/Auth.js'


const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware , addToCart)
cartRouter.post("/remove", authMiddleware , removeToCart)
cartRouter.post("/get", authMiddleware , getCart)

export default cartRouter
