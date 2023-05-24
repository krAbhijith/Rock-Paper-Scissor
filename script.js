const rockImage = document.getElementById("rock");
const paperImage = document.getElementById("paper");
const scissorImage = document.getElementById("scissor");
const playerSelection = document.getElementById("pSelection");
const computerSelection = document.getElementById("cSelection");
const cScore = document.getElementById("cScore");
const pScore = document.getElementById("pScore");
const cLabel = document.getElementById("cLabel");
const pLabel = document.getElementById("pLabel");
const scoreText = document.getElementById("scoreText");


function randomNum() {
    var num = Math.floor(Math.random() * 3) + 1;
    return num;
}
pImages = ["Assets/Rock.png","Assets/Paper.png","Assets/Scissor.png"]


rockImage.addEventListener("click" , ()=>{
    num = randomNum();
    key = num.toString() + 1;
    playerSelection.src = "Assets/Rock.png";
    computerSelection.src = pImages[num-1];
    ////console.log(key);
    check(key);
})
paperImage.addEventListener("click" , ()=>{
    num = randomNum();
    key = num.toString() + 2;
    playerSelection.src = "Assets/Paper.png";
    computerSelection.src = pImages[num-1];
    ////console.log(key);
    check(key);
})
scissorImage.addEventListener("click" , ()=>{
    num = randomNum();
    key = num.toString() + 3;
    playerSelection.src = "Assets/Scissor.png";
    computerSelection.src = pImages[num-1];
    ////console.log(key);
    check(key);
})

function check(key){
    switch (key) {
        case "11":
            ////console.log("Draw");
            break;
        case "12":
            ////console.log("Player");
            updateScore("p")
            break;
        case "13":
            ////console.log("Computer");
            updateScore("c")
            break;
        case "21":
            ////console.log("Computer");
            updateScore("c")
            break;
        case "22":
            ////console.log("Draw");
            break;
        case "23":
            ////console.log("Player");
            updateScore("p")
            break;
        case "31":
            ////console.log("Player");
            updateScore("p")
            break;
        case "32":
            ////console.log("Computer");
            updateScore("c")
            break;
        case "33":
            ////console.log("Draw");
            break;
        default:
            updateScore("p")
            break;
    }
}
function updateScore(e){
    if (e == "p") {
        if(pScore.innerHTML != 3){
            pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
            if(pScore.innerHTML == 3){
                ////console.log("player won");
                reset(1);
            }
        }   
    }else{
        if(cScore.innerHTML != 3){
            cScore.innerHTML = parseInt(cScore.innerHTML) + 1;
            if(cScore.innerHTML == 3){
                //console.log("Computer won");
                reset(0);
            }
        } 
    }
}
function reset(won){
    if(won==1){
        pLabel.innerHTML = "Winner🏆";
    }else{
        cLabel.innerHTML = "Winner🏆";
    }
    setTimeout(function() {
        playerSelection.src = "Assets/box.png";
        computerSelection.src = "Assets/box.png";
        cScore.innerHTML = "0";
        pScore.innerHTML = "0";
        pLabel.innerHTML = "Player(you)";
        cLabel.innerHTML = "Computer";
    }, 1500);
}
    