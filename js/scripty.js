let mario = document.querySelector(".mario")
let pipe = document.querySelector(".pipe")

 const jump = ()=>{
     mario.classList.add("jump")
 
 setTimeout(() => {
 
    mario.classList.remove("jump")
 
    },500)
    }

    document.addEventListener("keydown",jump)


    const loop = setInterval(() => {                            //transformar string em number
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') 
        const pipePosition = pipe.offsetLeft
   
        if(pipePosition <= 140 && pipePosition > 0 && marioPosition < 100){
            pipe.style.animation = "none"
            pipe.style.left = `${pipePosition}px`
        
            mario.style.animation = "none"
            mario.style.bottom = `${marioPosition}px`
        
            mario.src = "img/game-over.png"
            mario.style.width = "100px"
            mario.style.marginLeft= "50px"
        
        }
   
    }, 10);