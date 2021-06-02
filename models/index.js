const User = require("./User");
const Music = require("./Music");

// User.hasMany(Music, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Music.belongsTo(User, {
//   foreignKey: "user_id",
// });

module.exports = { User, Music };
