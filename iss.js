const request = require("request");

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {

    if (error) {
      return callback(`\nThere has been an error. Error information is as follows: \n ${error}`, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const { latitude, longitude} = JSON.parse(body);

    if (JSON.parse(body) === undefined) {
      return callback(`\nThere was an error - no IP address returned.\n`, null);
    } else {
      return callback(null, { latitude, longitude});
    }
  });

};

module.exports = { fetchCoordsByIP };