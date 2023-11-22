var hElement = document.querySelector(".p_h")
var mElement = document.querySelector(".p_m")
var sElement = document.querySelector(".p_s")
var digitalElement = window.document.querySelector(".digital")

function updateClock() {
    var date = new Date()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`

    let hDeg = ((360 / 12) * hour) - 90
    let mDeg = ((360 / 60) * minutes) - 90
    let sDeg = ((360 / 60) * seconds) - 90

    hElement.style.transform = `rotate(${hDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    sElement.style.transform = `rotate(${sDeg}deg)`
}

function fixZero(time) {
    return time < 10 ? `0${time}` : `${time}`
}

updateClock()
setInterval(updateClock, 1000)
