const clickEmitted = new Rx.BehaviorSubject('Not clicked');
const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () =>
  clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
  (value) => div.textContent = value
);
