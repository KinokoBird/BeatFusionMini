let hp = 5;
let drumInterval;
let drumInterval1;
let drumInterva2;
let drumInterval3;
let drumInterva4;
let score = 0;

let gameOver = false;

const startButton = document.getElementById("startButton");
const timingZone = document.getElementById("timingZone");
const drum = document.getElementById("drum");
const drum1 = document.getElementById("drum1");
const drum2 = document.getElementById("drum2");
const drum3 = document.getElementById("drum3");
const drum4 = document.getElementById("drum4");
const hpBar = document.getElementById("hpBar");
const scoreDisplay = document.getElementById("scoreDisplay"); // 追加
const damageZone = document.getElementById("damageZone");
const gameOverPopup = document.getElementById("gameOverPopup");
const retryButton = document.getElementById("retryButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const cursorMoveSound = document.getElementById("cursorMoveSound");
const damageSound = document.getElementById("damageSound");

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    resetScore();
    drumInterval = setInterval(moveDrum, 5);
    drumInterval1 = setInterval(moveDrum1, 10);
    drumInterval2 = setInterval(moveDrum2, 15);
    drumInterval3 = setInterval(moveDrum3, 20);
    drumInterval4 = setInterval(moveDrum4, 8);

    document.addEventListener("keydown", handleKeyPress);
    backgroundMusic.load();  // 音楽再生
    backgroundMusic.play();  // 音楽再生
});


function moveDrum() {
    let drumPosition = parseInt(getComputedStyle(drum).getPropertyValue("left"));
    if (drumPosition > -40) {
        drum.style.left = drumPosition - 1 + "px";
    } else {
        resetDrum();
        damageHP();
    }
}
function moveDrum1() {
    let drumPosition1 = parseInt(getComputedStyle(drum).getPropertyValue("left"));
    if (drumPosition1 > -40) {
        drum1.style.left = drumPosition1 - 1 + "px";
    } else {
        resetDrum1();
        damageHP();
    }
}
function moveDrum1() {
    let drumPosition1 = parseInt(getComputedStyle(drum1).getPropertyValue("left"));
    if (drumPosition1 > -40) {
        drum1.style.left = drumPosition1 - 1 + "px";
    } else {
        resetDrum1();
        damageHP();
    }
}
function moveDrum2() {
    let drumPosition2 = parseInt(getComputedStyle(drum2).getPropertyValue("left"));
    if (drumPosition2 > -40) {
        drum2.style.left = drumPosition2 - 1 + "px";
    } else {
        resetDrum1();
        damageHP();
    }
}
function moveDrum3() {
    let drumPosition3 = parseInt(getComputedStyle(drum3).getPropertyValue("left"));
    if (drumPosition3 > -40) {
        drum3.style.left = drumPosition3 - 1 + "px";
    } else {
        resetDrum1();
        damageHP();
    }
}
function moveDrum4() {
    let drumPosition4 = parseInt(getComputedStyle(drum4).getPropertyValue("left"));
    if (drumPosition4 > -40) {
        drum4.style.left = drumPosition4 - 1 + "px";
    } else {
        resetDrum4();
        damageHP();
    }
}
function resetDrum() {
    drum.style.left = "100%";
}

function resetDrum1() {
    drum1.style.left = "100%";
}

function resetDrum2() {
    drum2.style.left = "100%";
}

function resetDrum3() {
    drum3.style.left = "100%";
}

function resetDrum4() {
    drum4.style.left = "100%";
}

function resetScore() {
    score = 0;
    updateScoreDisplay();
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function incrementScore() {
    score++;
    updateScoreDisplay();
}

function handleKeyPress(event) {
    if (event.key === "a" && !gameOver) {
        if (drumPositionInsideTimingZone()) {
            resetDrum();
            playDrumSound();
            incrementScore(); // 追加
        }
        else if (drumPositionInsideTimingZone1()) {
            resetDrum1()
            playDrumSound();
            incrementScore(); // 追加
        }
        else if (drumPositionInsideTimingZone2()) {
            resetDrum2()
            playDrumSound();
            incrementScore(); // 追加
        } 
        else if (drumPositionInsideTimingZone3()) {
            resetDrum3()
            playDrumSound();
            incrementScore(); // 追加
        } 
        else if (drumPositionInsideTimingZone4()) {
            resetDrum4()
            playDrumSound();
            incrementScore(); // 追加
        } 
        else {
            damageHP();
        }  
    }
}


function drumPositionInsideTimingZone() {
    let drumPosition = parseInt(getComputedStyle(drum).getPropertyValue("left"));
    let timingZonePosition = parseInt(getComputedStyle(timingZone).getPropertyValue("left"));
    return drumPosition > timingZonePosition && drumPosition < timingZonePosition + 40;
}

function drumPositionInsideTimingZone1() {
    let drumPosition1 = parseInt(getComputedStyle(drum1).getPropertyValue("left"));
    let timingZonePosition = parseInt(getComputedStyle(timingZone).getPropertyValue("left"));
    return drumPosition1 > timingZonePosition && drumPosition1 < timingZonePosition + 40;
}

function drumPositionInsideTimingZone2() {
    let drumPosition2 = parseInt(getComputedStyle(drum2).getPropertyValue("left"));
    let timingZonePosition = parseInt(getComputedStyle(timingZone).getPropertyValue("left"));
    return drumPosition2 > timingZonePosition && drumPosition2 < timingZonePosition + 40;
}

function drumPositionInsideTimingZone3() {
    let drumPosition3 = parseInt(getComputedStyle(drum3).getPropertyValue("left"));
    let timingZonePosition = parseInt(getComputedStyle(timingZone).getPropertyValue("left"));
    return drumPosition3 > timingZonePosition && drumPosition3 < timingZonePosition + 40;
}

function drumPositionInsideTimingZone4() {
    let drumPosition4 = parseInt(getComputedStyle(drum4).getPropertyValue("left"));
    let timingZonePosition = parseInt(getComputedStyle(timingZone).getPropertyValue("left"));
    return drumPosition4 > timingZonePosition && drumPosition4 < timingZonePosition + 40;
}


function damageHP() {
    hp--;
    hpBar.style.width = hp * 20 + "px";
    if (hp === 0) {
        gameOver = true;
        clearInterval(drumInterval);
        clearInterval(drumInterval1);
        clearInterval(drumInterval2);
        clearInterval(drumInterval3);
        clearInterval(drumInterval4);
        damageZone.style.pointerEvents = "all";
        gameOverPopup.style.display = "block";
    }
    playDamageSound();
}

function playDamageSound() {
    damageSound.currentTime = 0;
    damageSound.play();
}

function retryGame() {
    hp = 5;
    hpBar.style.width = "100px";
    gameOver = false;
    resetDrum();
    resetDrum1();
    resetDrum2();
    resetDrum3();
    resetDrum4();
    damageZone.style.pointerEvents = "none";
    gameOverPopup.style.display = "none";
    startButton.style.display = "block";
    backgroundMusic.pause();
}

function playDrumSound() {
    cursorMoveSound.currentTime = 0;
    cursorMoveSound.play();
}

retryButton.addEventListener("click", retryGame);
