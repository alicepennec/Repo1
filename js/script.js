window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')

    let game

    function startGame() {
        game = new Game()
        game.start()
    }

    startButton.addEventListener('click', function () {
        startGame()
    })

    // player 1
    document.addEventListener('keydown', event => {
        console.log(event)
        if (event.code === 'KeyL') {
            game.player.directionX = 1
        } else if (event.code === 'KeyJ') {
            game.player.directionX = -1
        }
        if (event.code === 'KeyI' && !game.player.isJumping) {
            game.player.jump()
        }

    })

    document.addEventListener('keyup', event => {
        if (
            event.code === 'KeyL' ||
            event.code === 'KeyJ'
        ) {
            game.player.directionX = 0
        }

    })

    // player 2
    document.addEventListener('keydown', event => {
        console.log(event)
        if (event.code === 'KeyD') {
            game.player2.directionX = 1
        } else if (event.code === 'KeyA') {
            game.player2.directionX = -1
        }
        if (event.code === 'KeyW' && !game.player2.isJumping) {
            game.player2.jump()
        }

    })

    document.addEventListener('keyup', event => {
        if (
            event.code === 'KeyD' ||
            event.code === 'KeyA'
        ) {
            game.player2.directionX = 0
        }

    })

    /*restartButton.addEventListener('click', function() {
        game.player.element.remove()
        startGame()
    })*/

})
