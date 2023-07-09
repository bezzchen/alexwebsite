var n = 0
function leftarrow(x,length) {
    var img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
        duration: 1000
    })
    img.style.opacity = 0
    n -= 1
    if(n < 0) {
        n = length
    } else if(n > length) {
        n = 0
    } 
    img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 0},
            {opacity: 1 }
        ], {
        duration: 1000
    })
    img.style.opacity = 1
}
function rightarrow(x,length) {
    var img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 1},
            {opacity: 0}
        ], {
        duration: 1000
    })
    img.style.opacity = 0
    n += 1
    if(n < 0) {
        n = length
    } else if(n > length) {
        n = 0
    } 
    img = document.getElementById(`${x}img${n}`)
        img.animate([
            {opacity: 0},
            {opacity: 1 }
        ], {
        duration: 1000
    })
    img.style.opacity = 1
}
function opennav() {
    document.getElementById("sidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("sidenav").style.width = "0px";
}