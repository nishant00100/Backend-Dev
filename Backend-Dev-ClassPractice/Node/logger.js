// logger.js
const fs = require("fs");

function logActivity(message) {
  const timeStamp = new Date().toISOString();
  fs.appendFile("activity.log", `${message} - ${timeStamp}\n`, (err) => {
    if (err) console.log(err);
  });
}

module.exports = { logActivity };
