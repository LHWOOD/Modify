const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "jz4j5z8xcu4sgorr",
    "zrm9hkqhcfvgwm2d",
    "ozf5bwt5qr96xwtu",
    {
      host: "qao3ibsa7hhgecbv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
