function time(f) {
    let t = new Date();
    f();
    return new Date() - t;
}

function warmUp(f) { f() }

const RANGE = 50000000;

function push() {
    let a = [];
    for (let i = 0; i < RANGE; i++) {
        a.push(i*2);
    }
}

function index() {
    let a = [];
    for (let i = 0; i < RANGE; i++) {
        a[i] = i*2;
    }
}

global.gc();
warmUp(push);
console.log(time(push));

global.gc();
warmUp(index);
console.log(time(index));
