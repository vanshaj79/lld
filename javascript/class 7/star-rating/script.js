let starCont = document.querySelector('.star-container')
let stars = document.querySelectorAll('.star')
let ratingCount = document.querySelector('#star-rating')

starCont.addEventListener('click',event =>{
   //console.log(event.target.dataset)
    //dataset will basically scan your HTML element, 
    //it will pick all the custom attribute which start with data -
    let currentClickedStar = event.target.dataset.index
    for(let i=0; i<stars.length; i++){
        stars[i].classList.remove('star-colored')
    }
    
    for(let i=0; i<currentClickedStar; i++){
        stars[i].classList.add('star-colored')
    }
    ratingCount.innerText = currentClickedStar
})
