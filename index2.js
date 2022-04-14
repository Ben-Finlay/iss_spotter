const { nextISSTimesForMyLocation} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (let time in passTimes) {
      let date = 0;
      let seconds = 0;
      date = Date(passTimes[time].risetimes);
      seconds = passTimes[time].duration;
      
      console.log(`Next pass at ${date} for ${seconds} seconds!`);
    }
  })
  .catch((error) =>
    console.log("It didn't work: ", error.message));