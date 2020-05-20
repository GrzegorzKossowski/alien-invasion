export class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello ${this.name}`;
    }
    sayHelloTo(name) {
        return `Hello ${name}`;
    }

}