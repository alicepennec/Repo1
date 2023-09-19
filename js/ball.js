class Ball {
    constructor (gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.ball = document.createElement('img');

        this.ball.src ='./images/ballon.png'
        this.ball.style.position = "absolute";
        this.ball.style.width = `${this.width}px`;
        this.ball.style.height = `${this.height}px`;
        this.ball.style.left = `${this.left}px`;
        this.ball.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.ball)

    };
}