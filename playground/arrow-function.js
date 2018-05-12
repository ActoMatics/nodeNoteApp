let square = (x) => x * x;
console.log(square(9));

let user = {
    name: 'Sarit',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi, I'm ${this.name}`)
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`Hi, I'm ${this.name}`)
    }
}

user.sayHi(); //arrow functions does not bind to 'this' keyword
user.sayHiAlt(1, 2, 3);