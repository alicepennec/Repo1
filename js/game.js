class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.player = null
    this.height = 500
    this.width = 1000
    this.score = 0
    this.gameIsOver = false

  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    
    this.gameLoop();
  }
  gameLoop() {
   if (this.gameIsOver) {
    return;
   }

   this.update();

   window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    
  }
}