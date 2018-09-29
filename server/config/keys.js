console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
  module.exports = require("./prod");
} else if (process.env.NODE_ENV === "ci") {
  module.exports = require("./ci");
} else {
  module.exports = require("./dev");
}
