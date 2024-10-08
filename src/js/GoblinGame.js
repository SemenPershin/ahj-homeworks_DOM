export class GoblinGame {
    constructor() {
        this.goblin = document.getElementById("goblin");
        this.blinkInterval = 1000;
        this.gameStart = undefined;
        this.cells = document.querySelectorAll(".game_field > div");
        this.currentPosition = 0;
    }

    startGame() {
        this.gameStart = setInterval(() => {
            let shift = Math.ceil(Math.random() * 15);
            if (this.currentPosition + shift > 15) {
                this.currentPosition = this.currentPosition + shift - 15
            } else {
                this.currentPosition = this.currentPosition + shift
            }
            this.cells[this.currentPosition].appendChild(this.goblin)
        }, this.blinkInterval)
    }

    endGame() {
        clearInterval(this.gameStart)
    }
}
