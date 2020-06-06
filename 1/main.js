const button = document.querySelector('button');
//button.addEventListener('click', (event) => {console.log(event)})
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map((data) => {return data.clientY})
  .subscribe(
    (coordinate) => console.log(coordinate)
  );