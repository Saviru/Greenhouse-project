// only for testing
function fetchRandomValue() {
    var randomValue = Math.floor(Math.random() * 100);
    document.getElementById('temp').innerText = randomValue+" C";
    document.getElementById('humid').innerText = randomValue+" %";
    document.getElementById('soilmois').innerText = randomValue+" %";
    document.getElementById('lightlvl').innerText = randomValue+" %";

    if(randomValue < 40){
        document.querySelector('.humid-stts').innerText = "On";}
    else{
        document.querySelector('.humid-stts').innerText = "Off";}

    if(randomValue < 30){
        document.querySelector('.temp-stts').innerText = "On";}
    else{
        document.querySelector('.temp-stts').innerText = "Off";}

    if(randomValue < 50){
        document.querySelector('.lit-stts').innerText = "On";}
    else{
        document.querySelector('.lit-stts').innerText = "Off";}

    if(randomValue < 70){
        document.querySelector('.wp-stts').innerText = "On";}
    else{
        document.querySelector('.wp-stts').innerText = "Off";}

    if(randomValue > 50){
        document.querySelector('.fan-stts').innerText = "On";}
    else{
        document.querySelector('.fan-stts').innerText = "Off";}

    if(randomValue > 80){
        document.querySelector('.window-stts').innerText = "Opened";}
    else{
        document.querySelector('.window-stts').innerText = "Closed";}
}
  
setInterval(fetchRandomValue, 5000);