/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/GoblinGame.js
class GoblinGame {
  constructor() {
    this.goblin = document.getElementById("goblin");
    this.cells = document.querySelectorAll(".game_field > div");
    this.blinkInterval = 1000;
    this.gameStart = undefined;
    this.currentPosition = 0;
    this.scoreDiv = document.querySelector(".score");
    this.missesDiv = document.querySelector(".misses");
    this.loseScreen = document.querySelector(".lose_screen");
  }
  startGame() {
    this.scoreDiv.textContent = 0;
    this.missesDiv.textContent = 0;
    this.gameStart = setInterval(() => {
      let shift = Math.ceil(Math.random() * 14);
      if (this.currentPosition + shift > 15) {
        this.currentPosition = this.currentPosition + shift - 15;
      } else {
        this.currentPosition = this.currentPosition + shift;
      }
      this.cells[this.currentPosition].appendChild(this.goblin);
      if (this.goblin.classList.contains("hide")) {
        this.goblin.classList.remove("hide");
      } else {
        this.missesDiv.textContent++;
      }
      if (this.missesDiv.textContent >= 5) {
        this.endGame();
      }
    }, this.blinkInterval);
  }
  endGame() {
    clearInterval(this.gameStart);
    this.loseScreen.classList.remove("hide");
    this.loseScreen.textContent = `Жаль, но вы проиграли. Ваш счет: ${this.scoreDiv.textContent}`;
  }
  killGoblin() {
    this.goblin.classList.add("hide");
    this.scoreDiv.textContent++;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const goblin = new GoblinGame();
goblin.startGame();
goblin.goblin.addEventListener('click', () => {
  goblin.killGoblin();
});
;// CONCATENATED MODULE: ./src/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;