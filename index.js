//const { fetchMyIP } = require('./fetchIP');
//const { fetchCoordsByIP } = require('./fetchCoords');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('198.2.72.197', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   coordinates = coords;
//   console.log('It worked! Returned Coords:' , coords);
//   return;
// });

const exampleCoords = { latitude: 43.700, longitude: -79.3402 };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
  
});