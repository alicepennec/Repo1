class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.player = new Player (this.gameScreen, 720, 510, 100, 170);
    this.ball = new Ball (this.gameScreen, 720, 400, 100, 100);
    this.height = 640
    this.width = 960
    this.score = 0
    this.gameIsOver = false

  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //this.player.directionX = 1
    
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
    this.player.move()
    this.player.jump()
  }
}