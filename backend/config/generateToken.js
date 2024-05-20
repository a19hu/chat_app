const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, 'ashu', {
    expiresIn: "30d",
  });
};

module.exports = generateToken;