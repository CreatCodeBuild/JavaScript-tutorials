/*

这一次，让我们来看看 for of 的各种用法、应用场景

*/

// 首先，让我们来看看原生支持 for of 的数据结构
function inlineWrite() {
    for (let x of arguments) {
        process.stdout.write(`${x} | `)
    }
}


// Array
let a = [1, 2, 3];
inlineWrite(" Array:")
for (let x of a) {
    inlineWrite(x);
}
console.log();

// String
let s = "123四五六";
inlineWrite("String:")
for (let x of s) {
    inlineWrite(x);
}
console.log();

// TypedArray

// Map
let m = new Map();
m.set(1, "a"); m.set(2, "b"); m.set(3, "c");
inlineWrite("   Map:")
for (let x of m) {
    // x is an 2 length Array: [key, value] becuase there is no tuple in JavaScript
    inlineWrite(x[0], x[1]);
}
console.log();

// Set
let set = new Set();
set.add(1); set.add(2); set.add(3);
inlineWrite("   Set:")
for (let x of set) {
    inlineWrite(x);
}
console.log();
