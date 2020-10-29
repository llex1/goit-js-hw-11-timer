import css from "./scss/main.scss";
import hbs_container from "./templates/container.hbs"
import hbs_timer from "./templates/timer.hbs"

const dom_body = document.querySelector('body');

class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }
  start() {
    const date = new Date();
    const time = this.targetDate - date;
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((time % (1000 * 60)) / 1000);
    dom_body.insertAdjacentHTML('beforeend', hbs_container({selector:this.selector}));
    setInterval(()=>{
      if (secs === 0) {
        secs = 60;
        if (mins === 0){
          mins = 60;
          if (hours <= 0){
            hours = 24;
            days--
          }
          hours--;
        }
        mins--
      }
      secs--
      document.getElementById(`${this.selector}`).innerHTML = hbs_timer({days, hours, mins, secs});
    }, 1000);
  }
}

const NewYears = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jan 01, 2021'),
  });
NewYears.start();

const WomensDay = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('March 08, 2021'),
});
WomensDay.start();
