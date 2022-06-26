//1)

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

function printNumbers(from, to) {
    let current = from;

    const timerId = setInterval(() => {
        console.log(current);
        if (from === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}

printNumbers(1, 3);

//2)

function printNumbers() {
    let current = 0;

    const timerId = setInterval(() => {
        if (current % 3 === 0 && current !== 0) {
            console.log(current);
        }
        if (current === 9) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}

//3)

function firstCall() {
    console.log(1); // 1
    secondCall();
    setTimeout(function() {
        console.log(3) // 5
    }, 3000);
    console.log(4); // 3
}

function secondCall() {
    setTimeout(function() {
        console.log(5) // 4
    }, 0);
    console.log(6); // 2
}

//4)

let jordan = {
    name: "Michael",
    age: 59,
    getMyName: function() {
        console.log(this.name);
    },
    getFriendName: function(obj) {
        this.getMyName.apply(obj)
    }
}

let messi = {
    name: "Lionel",
    age: 34,
}

console.log(jordan.getMyName());
console.log(jordan.getFriendName(messi));