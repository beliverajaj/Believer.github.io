const hamburger=document.getElementById('H')
    const navilist=document.getElementById('navi-list')
    hamburger.addEventListener('click', () =>{
      navilist.classList.toggle("active")
    })