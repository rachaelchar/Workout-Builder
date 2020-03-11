'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Exercises', [{
      name: "Squat",
      muscle_group: "quads",
      type: "lower",
      aerobic: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: "Shoulder Press",
      muscle_group: "shoulders",
      type: "upper",
      aerobic: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Jumprope",
      type: "cardio",
      aerobic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Pushups",
      muscle_group: "chest",
      type: "upper",
      aerobic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Box Jumps",
      muscle_group: "glutes",
      type: "lower",
      aerobic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  }
};
