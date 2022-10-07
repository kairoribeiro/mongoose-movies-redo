import { Router } from 'express'
import * as performersCtrl from '../controllers/performers.js'

const router = Router()

//GET localhost:3000/performers/new
router.get('/new', performersCtrl.new)

//POST localhost:3000/performers
router.post('/', performersCtrl.create)

export {
    router
}