const input = document.querySelector('input');
const observable = Rx.Observable.fromEvent(input, 'input');

observable
.map(event => event.target.value)
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next(value) {
    console.log(value)
  }
});

observable
.pluck('target', 'value')
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next(value) {
    console.log(value)
  }
});