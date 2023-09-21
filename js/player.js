class Player {
    constructor(gameScreen, left, top, width, height, isPlayer2) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.isJumping = false;
        this.jumpHeight = -4;
        this.velocity = 0;
        this.gravity = 0.1;
        this.position = 0;
        this.isPlayer2 = isPlayer2
        this.element = document.createElement('img');

        if (isPlayer2) {
            this.element.src = "./images/rocket.png";
        } else {
            this.element.src = "./images/groot.png";
        }
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);

    };

    handleGravity() {
        if (this.isJumping) {
            this.directionY += this.gravity;
        }

    }

    move() {
        this.handleGravity()
        this.updatePosition()
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    };

    jump() {
        if (!this.isJumping) {
            this.directionY = this.jumpHeight;
            this.isJumping = true;
            setTimeout(() => {
                this.isJumping = false;
                this.directionY = 0
            }, 600)
        }
    }

    calculateLeftBorder() {
        let border = 540
        if (this.isPlayer2) {
            border = 0
        }
        return border
    }

    calculateRightBorder() {
        let border = this.gameScreen.clientWidth - this.width
        if (this.isPlayer2) {
            border = this.gameScreen.clientWidth - 480 - this.width
        }
        return border
    }

    updatePosition() {
        if (this.left < this.calculateLeftBorder()) {
            this.left = this.calculateLeftBorder()
        } else if (this.left > this.calculateRightBorder()) {
            this.left = this.calculateRightBorder()
        } else {
            this.left += this.directionX
        }

        if (this.top < 400) {
            this.top = 410
        } else if (this.top > this.gameScreen.clientHeight - this.height) {
            this.top = this.gameScreen.clientHeight - this.height
        } else { this.top += this.directionY }
    }

    didHit(ball) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = ball.ball.getBoundingClientRect();
        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }
}
