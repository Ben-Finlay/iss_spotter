
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  for (let time in passTimes) {
    
    let date = 0;
    let seconds = 0;
    date = Date(passTimes[time].risetimes);
    seconds = passTimes[time].duration;
    
    console.log(`Next pass at ${date} for ${seconds} seconds!`);
  }
  
});