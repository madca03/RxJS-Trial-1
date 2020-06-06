const input = document.querySelector('input');
const observable = Rx.Observable.of(1,2,3,4,5);

// returns single element which is the total
observable
.reduce((total, currentValue) => {
  return total + currentValue;
}, 0)
.subscribe({
  next(value) {
    console.log(value);
  }
});

// return an observable element for each iteration of scan
observable
.scan((total, currentValue) => {
  return total + currentValue;
}, 0)
.subscribe({
  next(value) {
    console.log(value);
  }
});