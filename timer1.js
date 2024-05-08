const setAlarms = function(alarms) {
  for (let i = 0; i < alarms.length ; i++){
    const seconds = alarms[i];
    setTimeout(() => {
      process.stdout.write("\x07");
    }, seconds * 1000);
  }
}
const args = process.argv.slice(2);

setAlarms(args);


