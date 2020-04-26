// Iteration Protocol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

let set = new Set();
set.add(1); set.add(2); set.add(3);
for (let x of set) {
    console.log(x);
}

let i = set[Symbol.iterator];
console.log(i);

let iterator = i.call(set);
console.log(iterator.next());
console.log(iterator.next());
for(let x of iterator) {
    console.log(x);
}

let iter = {
    count: 3,
    [Symbol.iterator]: function() {
        return this;
    },
    next: function() {
        if(this.count >= 0) {
            return { value: this.count--, done: false}
        }
        return { value: this.count, done: true}
    }
}

for(let x of iter) {
    console.log(x);
}
