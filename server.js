const db = require("./app/models");
const controller = require("./app/controllers/movie.controller");


const run = async () => {
  const movie1 = await controller.createMovie({
    title: "Movie#1",
    description: "Movie#1 Description",
  });

  const movie2 = await controller.createMovie({
    title: "Movie#2",
    description: "Movie#2 Description",
  });

  const review1 = await controller.createReview(movie1.id, {
    name: "reviewer1",
    text: "Good job!",
  });

  await controller.createReview(movie1.id, {
    name: "reviewer2",
    text: "One of the best movie!",
  });

  const review2 = await controller.createReview(movie2.id, {
    name: "reviewer3",
    text: "Hi, thank you!",
  });

  await controller.createReview(movie2.id, {
    name: "reviewer4",
    text: "Awesome movie!",
  });

  const movie1Data = await controller.findMovieById(movie1.id);
  console.log(
    ">> Movie id=" + movie1Data.id,
    JSON.stringify(movie1Data, null, 2)
  );

  const movie2Data = await controller.findMovieById(movie2.id);
  console.log(
    ">> Movie id=" + movie2Data.id,
    JSON.stringify(movie2Data, null, 2)
  );

  const review1Data = await controller.findReviewById(review1.id);
  console.log(
    ">> Review id=" + review1.id,
    JSON.stringify(review1Data, null, 2)
  );

  const review2Data = await controller.findReviewById(review2.id);
  console.log(
    ">> Review id=" + review2.id,
    JSON.stringify(review2Data, null, 2)
  );

  const movies = await controller.findAll();
  console.log(">> All movies", JSON.stringify(movies, null, 2));
};


// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});