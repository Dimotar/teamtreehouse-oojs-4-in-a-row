class Token {
    constructor(id, owner) {
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.owner = owner;
    }
}