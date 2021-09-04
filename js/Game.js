class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /**
     * Returns active player.
     * @return {Object}  player - The active player
     */
    get activePlayer() {
        return this.players.find(player => player.active)
    }
    
    /**
     * Creates two player objects
     * @returns {array} An array of two player objects.
     */
    createPlayers() {
        const player1 = new Player('Player 1', 1, '#e15258', true);
        const player2 = new Player('Player 2', 2, '#e59a13');

        return [player1, player2];
    }

    

    /**
     * gets game ready for play
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken()
        this.ready = true;
    }

    handleKeydown(e) {
        if(this.ready) {
            if ( e.key === "ArrowLeft") {
                console.log(e.key)
            } else if ( e.key === "ArrowRight") {
                console.log(e.key)
            } else if ( e.key === "ArrowDown") {
                console.log(e.key)
            }
        }
    }
}