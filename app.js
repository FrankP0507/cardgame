function run() {
    getCard()
}

function getCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4 )// 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", + "class='cards2'" + "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    
}

function Restart() {
    location.reload()
}

function stop() {
    $("#card").hide();
}



// comment