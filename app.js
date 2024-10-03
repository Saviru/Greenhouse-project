const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
var targetdoc = document.querySelector('.value-up');


function ctInd(sourceDoc, finalVal){
    document.querySelector(sourceDoc).innerText = finalVal;
}

function temp() {
  const gaugeElement = document.querySelector(".temp");

  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }

    gauge.querySelector(".tempFill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".tempCover").textContent = `${Math.round(
      value * 100
    )}%`;

    if(value > 0.8){
      gauge.querySelector(".tempCover").style.color = "#9e4444de";
    }
    else{
      gauge.querySelector(".tempCover").style.color = "#b0c1b1";
    }
}

setGaugeValue(gaugeElement, (Math.floor(Math.random() * 100))/100);
}

function humid() {
  const gaugeElement = document.querySelector(".humid");
  
  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }
    
    gauge.querySelector(".humidFill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".humidCover").textContent = `${Math.round(
      value * 100
    )}%`;

    if(value > 0.8){
      gauge.querySelector(".humidCover").style.color = "#9e4444de";
    }
    else{
      gauge.querySelector(".humidCover").style.color = "#b0c1b1";
    }

  }
  
  setGaugeValue(gaugeElement, (Math.floor(Math.random() * 100))/100);
}

function soilM() {
  const gaugeElement = document.querySelector(".soilM");
  
  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }
    
    gauge.querySelector(".soilMFill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".soilMCover").textContent = `${Math.round(
      value * 100
    )}%`;

    if(value > 0.8){
      gauge.querySelector(".soilMCover").style.color = "#9e4444de";
    }
    else{
      gauge.querySelector(".soilMCover").style.color = "#b0c1b1";
    }
  }
  
  setGaugeValue(gaugeElement, (Math.floor(Math.random() * 100))/100);
}

function ltl() {
  const gaugeElement = document.querySelector(".ltl");
  
  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }
    
    console.log(value);

    gauge.querySelector(".ltlFill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".ltlCover").textContent = `${Math.round(
      value * 100
    )}%`;

    if(value > 0.8){
      gauge.querySelector(".ltlCover").style.color = "#9e4444de";
    }
    else{
      gauge.querySelector(".ltlCover").style.color = "#b0c1b1";
    }

  }
  
  setGaugeValue(gaugeElement, (Math.floor(Math.random() * 100))/100);
}

setInterval(temp, 2000);
setInterval(humid, 2000);
setInterval(soilM, 2000);
setInterval(ltl, 2000);


function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

}

window.addEventListener('resize', function(){
  if(window.innerWidth <= 800){
    sidebar.classList.remove('close')
  }
  else{
    sidebar.classList.add('close')
  }
})



