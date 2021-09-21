//This function takes numbers (i.e. in seconds) as command line arguments
//and outputs a beep at every defined number interval. 

//take in cmd line arguments and store in an array
const beepTimes = process.argv.slice(2);

//loop through and output a beep based on the values of the array
for (let time of beepTimes) {
  let item = Number(time);

  //ignore negative numbers and NaNs
  if (item < 0 || isNaN(item)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
    //console.log(`${item} seconds`);
  }, 1000 * item);
}