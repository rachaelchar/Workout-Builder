module.exports = (sequelize, DataTypes) => {
  const exercise = sequelize.define('exercise', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    muscle_group: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aerobic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return exercise;
};