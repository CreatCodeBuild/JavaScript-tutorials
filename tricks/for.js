/*

for loop 的4种用法以及应用场景

1. for(let i = 0; i < N; i++)
2. for(let key in object)
3. forEach(lambda)
4. for(let item of iterable)

第4项可以涉及到非常多的拓展，这次我们只讲最基础的。

*/

// 首先我们来看最普通的 for 循环
// Let's first look at the most basic for loop
(function forI() {
    process.stdout.write('for i++: ');
    for (let i = 0; i < 5; i++) {
        process.stdout.write(`${i} `);
    }
    process.stdout.write('\n');
})();

// Now, let's look at for in.
function forIn(obj) {
    process.stdout.write('for in: ');
    for (let key in obj) {
        process.stdout.write(`${key}:${obj[key]} | `);
    }
    process.stdout.write('\n');
};
forIn([1, 2, 3]);
forIn({ a: "x", "b": "y", 3: "y", 1: "x" });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function forEach(obj) {
    process.stdout.write('for each: ');
    obj.forEach((currentValue, index, array) => {
        process.stdout.write(`${currentValue}:${index}:[${array}] | `);
    });
    process.stdout.write('\n');
}
forEach([1, 2, 3]);

function forOf(obj) {
    process.stdout.write('for of: ');
    for (let item of obj) {
        process.stdout.write(`${item} | `);
    }
    process.stdout.write('\n');
}
forOf([1, 2, 3]);
try {
    forOf({});
} catch (e) {
    console.log(e.message);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
}


// Now, let's test how fast they are.
function SpeedTest() {
    const N = 10000000;
    let a = [];
    for (let i = 0; i < N; i++) {
        a.push(i);
    }

    let t1 = new Date();
    for (let i = 0; i < a.length; i++) { }
    let t2 = new Date() - t1;
    console.log('for loop speed', t2);

    let t3 = new Date();
    for (let x in a) { }
    let t4 = new Date() - t3;
    console.log('for   in speed', t4, t4 / t2);

    let t5 = new Date();
    a.forEach(() => { });
    let t6 = new Date() - t5;
    console.log('for each speed', t6, t6 / t2);

    let t7 = new Date();
    for (let x of a) { }
    let t8 = new Date() - t7;
    console.log('for   of speed', t8, t8 / t2);
};
SpeedTest();


// JS自带数据结构中，有哪些实现了 Iteration Protocol 呢？
// 或者说，有哪些数据结构是 Iterable 呢？
// What built in data structures in JavaScript implement Iteration Protocol?
// In other words, what data structures are iterable?

// String, Array, TypedArray, Map, and Set are all built-in iterables

// String

// Array

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
