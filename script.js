let output = document.querySelector("p")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")

let seconds = 0
let minutes = 0
let hours = 0
let timer

function add (){
    seconds++
    if(seconds===60){
        seconds=0
        minutes++
        if(minutes===60){
            minutes=0
            hours++
        }
    }
    show()
}

function show (){
    let secPretty = seconds
    let minutePretty = minutes
    let hoursPretty = hours
    seconds<10 && (secPretty="0" + seconds)
    minutes<10 && (minutePretty="0" + minutes)
    hours<10 && (hoursPretty="0" + hours)
    output.innerHTML=hoursPretty+":"+minutePretty+":"+secPretty
}


start.addEventListener("click",()=>{
    timer=setInterval(add,1000)
})


stop.addEventListener("click",()=>{
    timer=clearInterval(timer)
})

reset.addEventListener("click",()=>{
    output.textContent="00:00:00"
    let seconds = 0
    let minutes = 0
    let hours = 0
    timer=clearInterval(timer)
})