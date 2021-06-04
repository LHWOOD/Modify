const User = require("./User");
const Music = require("./Music");

User.hasMany(Music, {
  as: "songs",
});

Music.belongsToMany(User, {
  through: "userMusic",
});

module.exports = { User, Music };
