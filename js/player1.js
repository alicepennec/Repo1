class Player {
    constructor(gameScreen, left, top, width, height) {
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
        this.element = document.createElement('img');

        this.element.src = "./images/groot.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);

    };

    move() {
        this.gravity()
        this.updatePosition()
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    };

    jump () {
        if(!this.isJumping) {
            this.directionY = this.jumpHeight;
            this.isJumping = true;
        }
    }

    gravity () {
        this.velocity += game.gravity;
        if(this.isJumping) {
            this.velocity += 0.1
        }
        this.top += this.velocity;
    }

        updatePosition() {
        if (this.left < 540) {
            this.left = 540
        }else if (this.left > this.gameScreen.clientWidth - this.width) {
            this.left = this.gameScreen.clientWidth - this.width
        }else {this.left += this.directionX}

        if (this.top < 400) {
            this.top = 400
        }else if (this.top > this.gameScreen.clientHeight - this.height) {
            this.top = this.gameScreen.clientHeight - this.height
        }else {this.top += this.directionY}

        if (this.top < this.gameScreen.clientHeight - this.height && !this.isJumping) {
            this.directionY += this.gravity;
        }else {this.isJumping = false}

    }                              
}
