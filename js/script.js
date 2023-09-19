window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')

    let game

    function startGame() {
        game = new Game()
        game.start()
    }

    startButton.addEventListener('click', function() {
        startGame()
    })

    document.addEventListener('keydown', event => {
        console.log(event)
        if (event.code === 'KeyL') {
            game.player.directionX = 1
        } else if (event.code === 'KeyJ') {
            game.player.directionX = -1
        }
        if (event.code === 'KeyI') {
            game.player.directionY = -1
        }
        
    })

    document.addEventListener('keyup', event => {
        if(
            event.code === 'KeyL' ||
            event.code === 'KeyJ'
        ) {
            game.player.directionX = 0
            }
        if (event.code === 'KeyI') {
            game.player.directionY = 0
        }
        })

    /*restartButton.addEventListener('click', function() {
        game.player.element.remove()
        startGame()
    })*/

})
