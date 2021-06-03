const User = require("./User");
const Music = require("./Music");
const UserMusic = require("./UserMusic");

User.hasMany(UserMusic, {
  foreignKey: "music_id",
  onDelete: "CASCADE",
});

// Music.belongsTo(User, {
//     foreignKey: ""
// })

module.exports = { User, Music, UserMusic };
