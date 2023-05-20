const secondHand=document.querySelector('.second-hand')
const minHand=document.querySelector('.min-hand')
const hourHand=document.querySelector('.hour-hand')

function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const mins=now.getMinutes();
    const hours=now.getHours();

    const secondsDegrees=(seconds*6)+90;
    const minsDegrees=(mins*6)+90;
    const hoursDegrees=(hours*30)+90+((mins*6)/72);

    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
    minHand.style.transform=`rotate(${minsDegrees}deg)`;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`;
}
setInterval(setDate,1000);