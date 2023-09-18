class Player {
    constructor(gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.player = new Player(this.gameScreen, 0, 0, 42, 73);
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement('img');

        this.element.src = "../";
        this.elementstyle.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);

    };

    move() { };

    updatePosition() { }
}
