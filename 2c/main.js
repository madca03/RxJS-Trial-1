const button = document.querySelector('button');

const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("Completed")
  }
}

// Rx.Observable.fromEvent(button, 'click')
const subsciption = Rx.Observable.create((obs) => {
  button.onclick = (event) => {
    obs.next(event);
  } 
})
.throttleTime(1000)
.subscribe(observer);

setTimeout(() => {
  subsciption.unsubscribe();
} ,5000);