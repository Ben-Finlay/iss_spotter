const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request(`https://api.ipify.org/?format=json`, (error, response, body) => {

    if (error) {
      return callback(`\nThere has been an error. Error information is as follows: \n ${error}`, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const data = JSON.parse(body);
    const ipAdd = data.ip;

    if (ipAdd === undefined) {
      return callback(`\nThere was an error - no IP address returned.\n`, null);
    } else {
      return callback(null, ipAdd);
    }
  });
};





module.exports = { fetchMyIP };