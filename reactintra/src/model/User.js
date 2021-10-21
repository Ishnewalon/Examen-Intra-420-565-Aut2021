export class User {
    id = null;
    name = '';
    guess = '';
    randoNumber = '';

    constructor(name, guess, randoNumber) {
        this.name = name;
        this.guess = guess;
        this.randoNumber = randoNumber;
    }
}