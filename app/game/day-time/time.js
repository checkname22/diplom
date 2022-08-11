class Time {
  constructor(seasons) {
    this.seasons = seasons;
    this.seconds = "";
  }
  changeSeasons = () => {
    setInterval(() => {
    if(this.seasons.seasonsCounter === 0) {
        this.seasons.spring();
        this.seasons.seasonsCounter += 1;
        localStorage.setItem("season", this.seasons.seasonsCounter);
      } else if (this.seasons.seasonsCounter === 1) {
          this.seasons.summer();
          this.seasons.seasonsCounter += 1;
          localStorage.setItem("season", this.seasons.seasonsCounter);
      } else if (this.seasons.seasonsCounter === 2) {
          this.seasons.autumn();
          this.seasons.seasonsCounter += 1;
          localStorage.setItem("season", this.seasons.seasonsCounter);
    } else if (this.seasons.seasonsCounter === 3) {
          this.seasons.winter();
          this.seasons.seasonsCounter = 0;
          localStorage.setItem("season", this.seasons.seasonsCounter);
    }
    }, this.seasons.timeToChangeSeason);
  }
  changeDayTime = (time) => {
    let dayTime = document.getElementsByClassName('day-time')[0];
    if (time >= '00:00:00' && time <= '05:59:59') {
      dayTime.textContent = "NIGHT";
      document.getElementsByTagName('canvas')[0].classList.remove('evening');
      document.getElementsByTagName('canvas')[0].classList.add('night');
    } else if (time >= '06:00:00' && time <= '11:59:59') {
      dayTime.textContent = "MORNING"
      document.getElementsByTagName('canvas')[0].classList.remove('night');
      document.getElementsByTagName('canvas')[0].classList.add('morning');
    } else if (time >= '08:00:00' && time <= '19:59:59') {
      dayTime.textContent = "DAY"
      document.getElementsByTagName('canvas')[0].classList.remove('morning');
      document.getElementsByTagName('canvas')[0].classList.add('day');
    } else if (time >= '20:00:00' && time <= '23:59:59') {
      dayTime.textContent = "EVENING"
      document.getElementsByTagName('canvas')[0].classList.remove('day;');
      document.getElementsByTagName('canvas')[0].classList.add('evening');
    }
  }
  clock = () => {
    let date = new Date(),
        hours = date.getHours(),
        minuts = date.getMinutes();
        this.seconds = date.getSeconds();
  
    if (hours < 10) hours = '0' + hours;
    if (minuts < 10) minuts = '0' + minuts;
    if (this.seconds < 10) this.seconds = '0' + this.seconds;
  
    let time = hours + ':' + minuts + ':' + this.seconds;
  
    document.getElementsByClassName('day-clock')[0].textContent = time;
    
    this.changeDayTime(time);
    setTimeout(() => {
      this.clock();
    }, 1000);
  }
}