class Token {
    constructor(id, owner) {
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
        this.owner = owner;
        this.columnLocation = 0;
    }

    get htmlToken() {
        return document.getElementById(this.id)
    }

    /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

  

    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute("id", this.id);
        token.setAttribute("class", 'token');
        token.style.backgroundColor = this.owner.color;
    }

    /** 
     * Moves html token one column to left.
     */
    moveLeft(){
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft -76;
            this.columnLocation -= 1;
        }
    }

    moveRight(columns){
        if(this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }

    /** 
     * Drops html token into targeted board space.
     * @param   {Object}   target - Targeted space for dropped token.
     * @param   {function} reset  - The reset function to call after the drop animation has completed.
     */
    drop(target, reset) {
        this.dropped = true;
        
        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}