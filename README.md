# Kings of the Galaxy
[Click here to see deployed game](https://alicepennec.github.io/Repo1/)

## Description
Kings of the galaxy is a volleyball game with two players. The game starts when a player jumps to kick the ball to the opposite direction. If the ball touches the floor, the opponent get one point. The game ends when a player reaches 3 points.

## MVP
- game has a main character that moves horizontally and vertically by jumping
- ball is moving from one side to the other one
- player has to kick the ball to start the game
- if the ball touches the floor the point goes to a specific player
- first player reaching 3 points wins
- restart option (loop)

## Backlog
- ~~create two different screens depending on the winner~~
- ~~add music during the game~~
- add sound when players touch the ball
- add an obstacle with the net

## Data structure
List of classes and methods
### script.js
- window.addEventListener()
- startGame()
- startButton.addEventListener()
- restartButton.addEventListener()
- document.addEventListener('keydown')
- document.addEventListener('keyup')
- targetting DOM element

### game.js
- class Game
    - start()
        - music.play()
    - gameLoop()
        - conditional operator '||'
        - window.cancelAnimationFrame()
        - window.requestAnimationFrame()
    - update ()
        - setTimeout()
        - conditional operator '&&'
- targetting DOM element

### player.js
- class Player
    - constructor (gameScreen, left, top, width, height, isPlayer2)
        - document.createElement
        - game.screen.appendChild()
    - handleGravity()
    - move()
    - jump()
    - calculateLeftBorder()
    - calculateRightBorder()
    - updatePosition()
    - didHit(ball)

### ball.js
- class Ball
    - constructor(gameScreen, left, top, width, height)
        - document.createElement
        - gameScreen.appendChild()
    - updatePosition()

## States y States Transitions
- startScreen
- gameScreen
- gameEndScreen

## Task
List of tasks in order of priority
- main - buildDOM
- main - buildStartScreen
- main - addEventListener
- main - buildGameScreen
- game - addEventListener
- player - draw
- player - move
- player - updatePosition
- ball - draw
- ball - move
- ball - updatePosition
- game - addHit
- game - addScore
- game - startLoop
- game - checkCollision
- game - buildGameEndScreen

## Links

[Deployment Link](https://alicepennec.github.io/Repo1/)