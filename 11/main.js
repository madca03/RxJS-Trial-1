const button = document.querySelector('button');

const obs1 = Rx.Observable.fromEvent(button, 'click');
const obs2 = Rx.Observable.interval(1000);

// clicking multiple times will not cancel old subscriptions
// obs1.subscribe(
//   (event) => obs2.subscribe(
//     (value) => console.log(value)
//   )
// )

obs1.switchMap(
  (event) => {
    return obs2
  }
).subscribe(
  (value) => console.log(value)
)