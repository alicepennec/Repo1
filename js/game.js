class Game {
  constructor() {
    this.startScreen = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameEndScreen = document.getElementById('game-end')
    this.player = new Player(this.gameScreen, 720, 510, 100, 170);
    this.player2 = new Player(this.gameScreen, 120, 500, 120, 170, true);
    this.ball = new Ball(this.gameScreen, 720, 400, 60, 60);
    this.height = 640
    this.width = 960
    this.score = 0
    this.score2 = 0
    this.gameIsOver = false
    this.gameEndGroot = document.getElementById('groot-won')
    this.gameEndRocket = document.getElementById('rocket-won')
    this.music = document.getElementById('game-music')
    this.animateId = null
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //this.player.directionX = 1
    this.music.play();
    this.music.volume = 0.2;
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.update();

    document.getElementById('score1').innerText = this.score
    document.getElementById('score2').innerText = this.score2

    if (this.score === 3 || this.score2 === 3) {
      this.gameIsOver = true
      this.music.pause()
    }

    if (this.gameIsOver) {
      if (this.score === 3) {
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
        this.gameEndRocket.style.display = 'none'
        this.gameEndGroot.style.display = 'block'
        window.cancelAnimationFrame(this.animateId)
      } else {
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
        this.gameEndGroot.style.display = 'none'
        this.gameEndRocket.style.display = 'block'
        window.cancelAnimationFrame(this.animateId)
      }
    } else {
      this.animateId = window.requestAnimationFrame(() => this.gameLoop());
    };
    //window.requestAnimationFrame(() => this.gameLoop());

  }

  update() {
    this.player.move()
    this.player2.move()
    if (this.player.didHit(this.ball)) {
      this.ball.directionX = this.ball.directionX * -1
      this.ball.directionY = -3
      setTimeout(() => {
        this.ball.directionY = 1.5
      }, 700)
    }

    if (this.player2.didHit(this.ball)) {
      this.ball.directionX = this.ball.directionX * -1
      this.ball.directionY = -3
      setTimeout(() => {
        this.ball.directionY = 1.5
      }, 700)
    }


    this.ball.updatePosition()
    if (this.ball.left > this.gameScreen.clientWidth - this.ball.width) {
      this.ball.directionX = -1
    } else if (this.ball.left < 0) {
      this.ball.directionX = 1
    }

    /*if (this.ball.left > this.gameScreen.clientWidth - this.ball.width) {
      this.score2 += 1
    } else if (this.ball.left < 0) {
      this.score += 1
    }*/
    if (this.ball.left > 0 && this.ball.left < 520 && this.ball.top >= this.gameScreen.clientHeight - this.ball.height) {
      //if (0 < this.ball.left <= this.gameScreen.clientWidth / 2 - this.ball.width && this.ball.top >= this.gameScreen.clientHeight - this.ball.height) {
      this.score += 1
      this.ball.left = this.ball.originalLeft
      this.ball.top = this.ball.originalTop
      this.ball.directionY = 0
      this.ball.directionX = -1
    } else if (this.ball.left > 520 && this.ball.left < this.gameScreen.clientWidth && this.ball.top >= this.gameScreen.clientHeight - this.ball.height) {
      //else if (this.gameScreen.clientWidth / 2 < this.ball.left <= this.gameScreen.clientWidth - this.ball.width && this.ball.top >= this.gameScreen.clientHeight - this.ball.height) {
      this.score2 += 1
      this.ball.left = 120
      this.ball.top = this.ball.originalTop
      this.ball.directionY = 0
      this.ball.directionX = 1
    }
  }
}