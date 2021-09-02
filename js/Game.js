class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
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
        
    }
}