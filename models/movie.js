import mongoose from "mongoose";

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: { 
        type: String,
        required: true,
    },
    releaseYear: {
        type: Number, 
        default: function() {
            return new Date().getFullYear()
        }
    },
    mpaaRating: String,
    cast: [String],
    nowShowing: {type: Boolean, default: false},
}, {
    timestamps: true
})

const Movie = mongoose.model('Movie', movieSchema)

export {
    Movie
}