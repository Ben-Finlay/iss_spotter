const request = require("request");


const fetchISSFlyOverTimes = function(coords, callback) {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS passes: ${body}`), null);
      return;
    }

    const flyOver = JSON.parse(body).response;
    callback(null, flyOver);
  });
};

module.exports = { fetchISSFlyOverTimes };