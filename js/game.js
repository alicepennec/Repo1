class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.player = new Player(this.gameScreen, 720, 510, 100, 170);
    this.player2 = new Player(this.gameScreen, 120, 510, 120, 170, true);
    this.ball = new Ball(this.gameScreen, 500, 400, 100, 100);
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
    this.player2.move()
    if (this.player.didHit(this.ball)) {
      this.ball.directionX = this.ball.directionX * -1
      this.ball.directionY = -3
      setTimeout(() => {
        this.ball.directionY = 0.9
      }, 700)
    }
    if (this.player2.didHit(this.ball)) {
      this.ball.directionX = this.ball.directionX * -1
      this.ball.directionY = -3
      setTimeout(() => {
        this.ball.directionY = 0.9
      }, 700)
    }
    this.ball.updatePosition()
    if (this.ball.left > this.gameScreen.clientWidth - this.ball.width) {
      this.ball.directionX = -1
    } else if (this.ball.left < 0) {
      this.ball.directionX = 1
    }
  }
}