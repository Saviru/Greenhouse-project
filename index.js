var targetdoc = document.querySelector('.value-up');


function ctInd(sourceDoc, finalVal){
    document.querySelector(sourceDoc).innerText = finalVal;
}

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
  