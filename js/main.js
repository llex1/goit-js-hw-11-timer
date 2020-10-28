//! Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
//* new CountdownTimer({
//*   selector: '#timer-1',
//*   targetDate: new Date('Jul 17, 2019'),
//* });


const dom_casio = document.querySelector('.casio');
const dom_spanDays = document.querySelector('span[data-value="days"]')
const dom_spanHours = document.querySelector('span[data-value="hours"]')
const dom_spanMins = document.querySelector('span[data-value="mins"]')
const dom_spanSecs = document.querySelector('span[data-value="secs"]')


const date = new Date();
const targetDate = new Date('Jan 01, 2021');
const time = targetDate - date;

let days = Math.floor(time / (1000 * 60 * 60 * 24));
let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
let secs = Math.floor((time % (1000 * 60)) / 1000);

dom_spanSecs.innerText = secs;
dom_spanMins.innerText = mins;
dom_spanHours.innerText = hours;
dom_spanDays.innerText = days;

setInterval(()=> {
  if(secs === 0) {
    secs = 60
      if(mins === 0){
        mins = 60;
        if(hours === 0){
          hours = 24;
          days--
          inserValue('d');
        }
        hours--;
        inserValue('h')
      }
    mins--
    inserValue('m')
  }
    secs--
    inserValue('s')
},1000)

function inserValue(mark) {
  switch(mark){
    case 's':
      dom_spanSecs.innerText = secs;
      break;
    case 'm':
      dom_spanMins.innerText = mins;
      break;
    case 'h':
      dom_spanHours.innerText = hours;
      break;
    case 'd':
      dom_spanDays.innerText = days;
  }
}

