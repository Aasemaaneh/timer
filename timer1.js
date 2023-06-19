const args = process.argv.slice(2);

const scheduleAlarm = function (time) {
  if (isNaN(time)) {
    console.log(`enter a number!`);
    return; 
  } else if (time < 0) {
    console.log(`enter a  Positive number instead of ${time}!`);
    return;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000); 
  };
}

for (const arg of args) {
  const time = Number(arg);
  scheduleAlarm(time);
}
