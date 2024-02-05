const player = document.getElementById('play')
const audio = document.getElementById('audio')

function addImg(tipo) {
    let img = document.getElementById('img')
    img.src = tipo
}

player.addEventListener('click', function () {
    if (audio.paused) {

        audio.play()
        addImg('jumentos.jpg')
    }
    else {
        audio.currentTime = 0
    }
})