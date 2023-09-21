class Ball {
    constructor(gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.originalLeft = left;
        this.top = top;
        this.originalTop = top;
        this.width = width;
        this.height = height;
        this.directionX = -1;
        this.directionY = 0;
        this.ball = document.createElement('img');

        this.ball.src = './images/ball2.png'
        this.ball.style.position = "absolute";
        this.ball.style.width = `${this.width}px`;
        this.ball.style.height = `${this.height}px`;
        this.ball.style.left = `${this.left}px`;
        this.ball.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.ball)

    };

    updatePosition() {
        this.left += this.directionX
        this.ball.style.left = `${this.left}px`

        this.top += this.directionY
        this.ball.style.top = `${this.top}px`
    }


}