class Token {
    constructor(id, owner) {
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
        this.owner = owner;
    }

    get htmlToken() {
        return document.getElementById(this.id)
    }

  

    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", 'token');
        token.style.backgroundColor = this.owner.color;
    }
}