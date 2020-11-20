module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    name: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  });

  return Review;
};