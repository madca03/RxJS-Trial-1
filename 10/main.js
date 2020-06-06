const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const span = document.querySelector('span');

const obs1 = Rx.Observable.fromEvent(input1, 'input');
const obs2 = Rx.Observable.fromEvent(input2, 'input');

// input2 needs to have value in order for this merged map observable to fire up an event
obs1.mergeMap(
  (event1) => {
    return obs2.map(event2 => event1.target.value + ' ' + event2.target.value)
  }
).subscribe(
  (combinedValue) => span.textContent = combinedValue
);