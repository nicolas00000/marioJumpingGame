let mario = document.querySelector(".mario")
let pipe = document.querySelector(".pipe")
const nuvem = document.querySelector(".cloud")
const nuvem2 = document.querySelector(".cloud2")
const resetarJogo = document.querySelector(".gameover")
const btn = document.querySelector(".botaoJump") 
let travarJump = true

function start(){
    const start = document.querySelector(".start")
    start.style.display= "none"
    mario.src = "img/mario.gif"
    mario.style.width = "170px"
    pipe.classList.add("pipeRun")
    nuvem.classList.add("cloudRun")
    nuvem2.classList.add("cloudRun2")

    
  
    document.addEventListener("keydown",pular)
    btn.addEventListener("click",pular)

    const loop = setInterval(() => {                            //transformar string em number
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') 
        const pipePosition = pipe.offsetLeft
   
        if(pipePosition <= 140 && pipePosition > 0 && marioPosition < 100){
            
            pipe.style.left = `${pipePosition}px`
            mario.style.bottom = `${marioPosition}px`
        
            mario.src = "img/game-over.png"
            mario.style.width = "100px"
            mario.style.marginLeft= "50px"
            resetarJogo.classList.remove("escondido")
            pipe.classList.remove("pipeRun")
            clearInterval(loop);
            travarJump = false
        }
   
    }, 100);

 

}

function resetar(){
    mario.src = "img/mario.gif"
    mario.style.bottom = `0px`
    mario.style.width= "170px "
    mario.style.marginLeft= "0px"
    pipe.style.rigth = "-80px"
    pipe.style.left ="inherit"
    pipe.classList.add("pipeRun")
    resetarJogo.classList.add("escondido")
    travarJump = true
    start()

}

function pular() {
    if(travarJump){
        mario.classList.add("jump")
        setTimeout(() => {
            mario.classList.remove("jump")
        },1000)
    }
}