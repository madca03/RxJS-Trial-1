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
Rx.Observable.create((obs) => {
  obs.next('A value');
  // obs.error('Error')
  setTimeout(() => {
    obs.complete();
  }, 2000);
  obs.next('A second value');
}).subscribe(observer);