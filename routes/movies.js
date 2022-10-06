import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

//GET localhost:3000/
router.get('/', moviesCtrl.index)

/* GET users listing. */
router.get('/new', moviesCtrl.new)

//POST localhost:3000/movies
router.post('/', moviesCtrl.create)

export {
  router
}
