/**
 * Orchestrates multiple API requests in order to determine the next 5 upcoming ISS fly overs for the user's current location.
 * Input:
 *   - A callback with an error or results.
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly-over times as an array (null if error):
 *     [ { risetime: <number>, duration: <number> }, ... ]
 */

const { fetchMyIP } = require('./fetchIP');
const { fetchCoordsByIP } = require('./fetchCoords');
const { fetchISSFlyOverTimes } = require('./fetchFlyBy');

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return (callback(error, null));
    }

    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return (callback(error, null));
      }

      fetchISSFlyOverTimes(coords, (error, flyOver) => {
        if (error) {
          return (callback(error, null));
        }
        
        callback(null, flyOver);

      });
    });
  });









};


module.exports = { nextISSTimesForMyLocation };