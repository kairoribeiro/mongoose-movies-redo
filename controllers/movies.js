import { Movie } from '../models/movie.js'

function newMovie(req, res) {
    res.render('movies/new', {
        title: 'Add Movie',
    })
}

function create(req, res) {
req.body.nowShowing = !!req.body.nowShowing
// remove empty properties
for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
}
Movie.create(req.body)
.then(movie => {
    res.redirect('/movies')
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

function show(req, res) {
Movie.findById(req.params.id)
.then(movie => {
    res.render('movies/show', {
        movie: movie,
        title: 'Movie Details',
    })
})
.catch(err => {
    res.redirect('/movies')
})
}

function deleteMovie(req, res) {
Movie.findByIdAndDelete(req.params.id)
.then(() => {
    res.redirect('/movies')
})
.catch(err => {
    res.redirect('/movies')
})
}

function edit(req, res) {
Movie.findById(req.params.id)
.then(movie => {
    res.render('movies/edit', {
        movie: movie,
        title: "Edit Movie"
    })
})
.catch(err => {
    res.redirect('/movies')
})
}

function update(req, res) {
req.body.nowShowing = !!req.body.nowShowing
for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
Movie.findByIdAndUpdate(req.params.id, req.body, {new:true})
.then( movie => {
    res.redirect(`/movies/${movie._id}`)
})
.catch(err => {
    res.redirect('/movies')
})
}

function createReview(req, res) {
Movie.findById(req.params.id)
.then(movie => {
    movie.reviews.push(req.body)
    movie.save()
    .then(() => {
        res.redirect(`/movies/${movie._id}`)
    })
})
.catch(err => {
    res.redirect('/movies')
})
}


export {
    newMovie as new,
    create,
    index,
    show,
    deleteMovie as delete,
    edit,
    update,
    createReview,
}