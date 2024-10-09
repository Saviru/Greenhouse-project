// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxVSVunA5WdcuMaAxpQr-ySdNvUTz-yZQ",
  authDomain: "fc-gh-db.firebaseapp.com",
  databaseURL: "https://fc-gh-db-default-rtdb.firebaseio.com",
  projectId: "fc-gh-db",
  storageBucket: "fc-gh-db.appspot.com",
  messagingSenderId: "434031960841",
  appId: "1:434031960841:web:6ea9a8f0d77925ac63e9d8",
  measurementId: "G-TZWZLY94R7"
};

// Initialize Firebase
let data = [];
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "test");

function fetchValue() {
    onValue(dbRef, function(snapshot) {
        data = Object.values(snapshot.val());
        console.log(data);
    });
}
setInterval(fetchValue, 4000);

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

setGaugeValue(gaugeElement, data[4]/100);
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
  
  setGaugeValue(gaugeElement, data[1]/100);
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
  
  setGaugeValue(gaugeElement, data[3]/100);
}

function ltl() {
  const gaugeElement = document.querySelector(".ltl");
  
  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }
    
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
  setGaugeValue(gaugeElement, data[2]/100);
}

setInterval(fetchValue, 5000);
setInterval(temp, 5000);
setInterval(humid, 5000);
setInterval(soilM, 5000);
setInterval(ltl, 5000);


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



