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



