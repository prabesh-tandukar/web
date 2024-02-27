const currentDate = new Date();
console.log(currentDate);

console.log(currentDate.getFullYear());

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 100000; i++) {
    a = a + i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();
const AfterDate = new Date();
const afterTimeInMs = AfterDate.getTime();
console.log(afterTimeInMs - beforeTimeInMs);

function printTime() {
  const date = new Date();
  console.log(
    date.getHours() + ":" + date.getMinutes() + ":" + date.getUTCSeconds()
  );
}

setInterval(printTime, 1000);
