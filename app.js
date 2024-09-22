const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
var targetdoc = document.querySelector('.value-up');

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



