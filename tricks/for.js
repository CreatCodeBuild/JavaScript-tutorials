/*

for loop 的3种用法以及应用场景

1. for(let i = 0; i < N; i++)
2. for(let key in object)
3. for(let item in iterable)

第三项可以涉及到非常多的拓展，这次我们只讲最基础的。

*/

function forI(N) {
    let a = [];
    for (let i = 0; i < N; i++) {
        process.stdout.write(`${i} `);
        a.push(i * i);
    }
    process.stdout.write('\n');
    return a;
}

function forIn(obj) {
    for (let key in obj) {
        process.stdout.write(`${key}:${obj[key]} | `);
    }
    process.stdout.write('\n');
}

function forOf(obj) {
    for (let item of obj) {
        process.stdout.write(`${item} | `);
    }
    process.stdout.write('\n');
}

let a = forI(5);
forIn(a);
forOf(a);

forIn({ 'a': 1, 'b': 2, 'c': 3 });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
try {
    forOf({ 'a': 1, 'b': 2, 'c': 3 });
} catch (e) {
    console.log(e);
}

// 所以说，JS自带数据结构中，有哪些实现了 Iteration Protocol 呢？
// 或者说，有哪些数据结构是 Iterable 呢？
// What built in data structures in JavaScript implement Iteration Protocol?
// In other words, what data structures are iterable?

// String, Array, TypedArray, Map, and Set are all built-in iterables

// String
for(let char of "abc d一二三") {
    process.stdout.write(`${char} | `);
}
process.stdout.write('\n');
console.log("一二三".length);

// Array
for(let element of ["a", "b", "c"]) {
    process.stdout.write(`${element} | `);
}
process.stdout.write('\n');

// TypedArray
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

// Map

// WeakMap

// Set

// WeakSet

// 其实还有一种原生 Iterable, 就是生成器
// 改日有幸再讲。
// There is one more native Iterable, that is Generator.
// Let's talk about it some episode in the future.
