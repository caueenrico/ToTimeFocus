import Sounds from "./sounds.js"
import climate  from "./climate.js"

climate()

const minutesDisplay  = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')
const plusButton = document.querySelector('.plus')
const reduceButton = document.querySelector('.reduce')

//songs variaveis
const songsButtons = document.querySelectorAll('.songs button')
const treeButton = document.querySelector('.tree')
const rainButton = document.querySelector('.rain')
const coffeButton = document.querySelector('.coffe')
const fireButton = document.querySelector('.fire')
const songsSection = document.querySelector('.songs')

const sounds = Sounds()
//songs funcionamentos
songsButtons.forEach((songsButtons) => {
  songsButtons.addEventListener('click', (event) => {
    let buttonSelected = event.currentTarget
    
    buttonSelected.classList.toggle("selected")

    if(buttonSelected.classList.value == 'coffe selected'){
      sounds.coffeSound.play()
    }else{
      sounds.coffeSound.pause()
      coffeButton.classList.remove('selected')
    }

    if(buttonSelected.classList.value == 'tree selected'){
      sounds.treeSound.play()
    }else{
      sounds.treeSound.pause()
      treeButton.classList.remove('selected')
    }

    if(buttonSelected.classList.value == 'rain selected'){
      sounds.rainSound.play()
    }else{
      sounds.rainSound.pause()
      rainButton.classList.remove('selected')
    }

    if(buttonSelected.classList.value == 'fire selected'){
      sounds.fireSound.play()
    }else{
      sounds.fireSound.pause()
      fireButton.classList.remove('selected')
    }
    
  })
})

//timer
let minutes = Number(minutesDisplay.textContent)
let setMinutes = minutes

reduceButton.disabled = true

playButton.addEventListener('click',countDown)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)

plusButton.addEventListener('click', (event) => {
  setMinutes += 5
  minutes = setMinutes

  updateTimerdisplay(minutes,0)
})

reduceButton.addEventListener('click', () => {
  setMinutes -= 5
  minutes = setMinutes

  updateTimerdisplay(minutes,0)
})

let timerOut

function countDown() {
  playButton.disabled = true
  plusButton.disabled = true
  reduceButton.disabled = true
  resetButton.disabled = true
  pauseButton.disabled = false

  playButton.classList.add('hide')
  pauseButton.classList.remove('hide')

  timerOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    
    
    if(seconds <= 0){
      seconds = 60
     --minutes
    }

    --seconds

    updateTimerdisplay(minutes,seconds)

    if(minutes <= 0 && seconds <= 0){
      minutes = 0
      seconds = 0
      sounds.endTime.play()

      setTimeout(() => {
        sounds.endTime.pause()

        resetTimer()
        playButton.classList.remove('hide')
        pauseButton.classList.add('hide')

      }, 2000);
      
      return
    }

    countDown()
  }, 1000)  

  console.log(timerOut)
}

function resetTimer() {
  playButton.disabled = false
  plusButton.disabled = false
  reduceButton.disabled = false
  resetButton.disabled = true


  minutes = setMinutes
  updateTimerdisplay(minutes, 0)
  clearTimeout(timerOut)
}

function pauseTimer() {
  playButton.disabled = false
  plusButton.disabled = false
  reduceButton.disabled = false
  resetButton.disabled = false

  playButton.classList.remove('hide')
  pauseButton.classList.add('hide')


  clearTimeout(timerOut)
}

function updateTimerdisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");


  if(minutes <= 5){
    reduceButton.disabled = true
  }else{
    reduceButton.disabled = false

  }
}


