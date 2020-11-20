const { reviews } = require("../models");
const db = require("../models");
const Movie = db.movies;
const Review = db.reviews;
exports.createMovie = (movie) => {
  return Movie.create({
    title: movie.title,
    description: movie.description,
  })
    .then((movie) => {
      console.log(">> Created movie: " + JSON.stringify(movie, null, 4));
      return movie;
    })
    .catch((err) => {
      console.log(">> Error while creating movie: ", err);
    });
};
exports.createReview = (movieId, review) => {
  return Review.create({
    name: review.name,
    text: review.text,
    movieId: movieId,
  })
    .then((review) => {
      console.log(">> Created review: " + JSON.stringify(review, null, 4));
      return review;
    })
    .catch((err) => {
      console.log(">> Error while creating review: ", err);
    });
};
exports.findMovieById = (movieId) => {
  return Movie.findByPk(movieId, { include: ["reviews"] })
    .then((movie) => {
      return movie;
    })
    .catch((err) => {
      console.log(">> Error while finding movie: ", err);
    });
};
exports.findReviewById = (id) => {
  return Review.findByPk(id, { include: ["movie"] })
    .then((review) => {
      return review;
    })
    .catch((err) => {
      console.log(">> Error while finding review: ", err);
    });
};
exports.findAll = () => {
  return Movie.findAll({
    include: ["reviews"],
  }).then((movies) => {
    return movies;
  });
};
