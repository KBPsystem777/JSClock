


const minutesHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');
const hrsHand = document.querySelector('.hour-hand');

function clock() {

    const dateToday = new Date();
    
    const seconds = dateToday.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    

    const mins = dateToday.getMinutes();
    const minsDegrees = ((mins/60) * 360) + ((seconds/60)+6) + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    

    const hrs = dateToday.getHours();
    const hrDegrees = ((hrs/12)*360) + ((mins/60)*30) + 90;
    hrsHand.style.transform = `rotate(${hrDegrees}deg)`;

    console.log(dateToday);
}
setInterval(clock, 1000);
clock();