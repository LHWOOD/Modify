const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Connection");

class UserMusic extends Model {}

UserMusic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    music_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "music",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "usermusic",
  }
);

module.exports = UserMusic;
