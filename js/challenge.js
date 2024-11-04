const counter = document.querySelector("h1#counter")
let currentCount = parseInt(counter.innerText, 10)

function doCounter(method = "add"){
    if(method === "add"){
        currentCount = currentCount + 1
        console.log("increased")
    } else {
        currentCount = currentCount - 1
        console.log("decreased")
    }
    counter.innerText = currentCount
}

//increaseCounter(countStart)
//console.log(countStart)

let intervalId;

function startCounting() {
    // check if an interval has already been set up
    if (!intervalId) {
        intervalId = setInterval(doCounter, 1000);
    }
}

function stopCounting() {
    clearInterval(intervalId);
    // release our intervalId from the variable
    intervalId = null;
}

startCounting()

const handleSubtract = () => {
    doCounter("subtract")
}

const handleAdd = () => {
    doCounter("add")
}

const handleLike = () => {
    const ul = document.querySelector("ul.likes")
    const li = document.createElement("li")
    li.innerText = currentCount
    ul.append(li)
}

const handlePause = () => {
    let status = pauseBtn.innerText
    if(status === "pause"){
        console.log("paused")
        stopCounting()
        status = "resume"
        pauseBtn.innerText = "resume"
    } else {
        console.log("started")
        startCounting()
        status = "pause"
        pauseBtn.innerText = "pause"
    }
}

document.querySelector("button#minus").addEventListener('click',handleSubtract)
document.querySelector("button#plus").addEventListener('click',handleAdd)
document.querySelector("button#heart").addEventListener('click',handleLike)

const pauseBtn = document.querySelector("button#pause")
pauseBtn.addEventListener('click',handlePause)