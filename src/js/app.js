import {GoblinGame} from "./GoblinGame.js"

let isStart = true;

const goblin = new GoblinGame();
goblin.startGame();

addEventListener("click", () => {
    if(isStart) {
        goblin.endGame();
        isStart = !isStart;
    } else {
        goblin.startGame();
        isStart = !isStart;
    }
})
