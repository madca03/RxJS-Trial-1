const observable = Rx.Observable.interval(1000);
const observer = {
  next(value) {
    console.log(value)
  }
};

observable.map((value) => {
  return `Number: ${value}`;
}).throttleTime(2000).subscribe(observer);