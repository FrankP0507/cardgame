function run() {
    getCard()
    stop()
}

var human = 0;
var computer = 0;

function getCard() {
    do {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4 )// 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    }while (human < 20);
}

function ct() {
    do {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4 )// 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    }while (computer < 20);
}


function Restart() {
    location.reload()
}

function stop() {
    
}

// comment