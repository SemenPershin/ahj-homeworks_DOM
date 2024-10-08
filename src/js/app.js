import {GoblinGame} from "./GoblinGame.js"

const goblin = new GoblinGame();
goblin.startGame();

goblin.goblin.addEventListener('click', () => {
    goblin.killGoblin()
})
