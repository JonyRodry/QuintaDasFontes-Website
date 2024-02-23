const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    })
})


export function cssAnimations(){
    const elementsBT = document.querySelectorAll('.hiddenBottomTop');
    elementsBT.forEach((element) => myObserver.observe(element));

    const elementsLR = document.querySelectorAll('.hiddenLeftRight');
    elementsLR.forEach((element) => myObserver.observe(element));
}