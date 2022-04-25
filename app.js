var human = 0;
var computer = 0;

function getCard() {
    do {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4 )// 0 to 3
    document.getElementById("card").insertAdjacentHTML("beforeend", + "class='cards2'" + "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    }while (human < 20);
}
alert("The computer will now go.")

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
    $("#card").hide();
}

function game() {
    if (computer > 20) {
        if (human > 20) {
            if (utotal > computer) {
                alert("The computer won because the user was farther away from 20")
                var computer = computer++
            } else {
                alert("The user won because the computer was farther away from 20")
                var human = human++
            }
        } else {
            alert(`The computer rolled a number greater than 20. The user automatically wins`)
        }
    } else if (ctotal <= 20){
        if (computer == human) {
            alert("The user and the computer tied")
        } else if (human == 20) {
            alert("The user one because their total was 20")
            var human = human++
        } else if (human > computer) {
            alert("The user won because their total was closer to 20")
            var uwins = uwins++
        } else if (computer > human) {
            alert("The computer won because their total was closer to 0")
            var copmuter = computer++
        }
    }
}


