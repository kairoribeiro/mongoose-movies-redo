import { Movie } from '../models/movie.js'

function newMovie(req, res) {
    res.render('movies/new', {
        title: 'Add Movie',
    })
}

function create(req, res) {
req.body.nowShowing = !!req.body.nowShowing
if (req.body.cast) {   // remove whitespace next to commas
req.body.cast = req.body.cast.split(', ')
}
// remove empty properties
for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
Movie.create(req.body)
.then(movie => {
    res.redirect('/movies')
console.log(req.body);
console.log(movie);
})
.catch(err => {
    res.redirect('/movies')
})
}

function index(req, res) {
Movie.find({}) 
.then(movies => { 
    res.render('movies/index', {
        movies: movies,
        title: "All Movies"
    })
})
.catch(err => {
    res.redirect('/movies/new')
})
}

export {
    newMovie as new,
    create,
    index,
}