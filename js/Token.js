class Token {
    constructor(id, owner) {
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
        this.owner = owner;
    }
}