/*
JavaScript 小技巧 1：push较之于键值对添加
*/

function time(f) {
    let t = new Date();
    f(arguments[1]);
    return new Date() - t;
}

function warmUp(f) { f(arguments[1]) }

function push(RANGE) {
    let a = [];
    for (let i = 0; i < RANGE; i++) {
        a.push(i*2);
    }
    return a;
}

function index(RANGE) {
    let a = [];
    // a.key = value
    // a["key"] = value
    // a[number] = value
    for (let i = 0; i < RANGE; i++) {
        a[i] = i*2;
    }
    return a;
}


console.log(push(10));
console.log(index(10));


const RANGE = 50000000;

global.gc();
warmUp(index, RANGE);
console.log(time(index, RANGE));

global.gc();
warmUp(push, RANGE);
console.log(time(push, RANGE));
