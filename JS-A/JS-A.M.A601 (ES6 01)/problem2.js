var x = 2,
    fns = [];

(() => {
    var x = 5;
    for (let i = 0; i < x; i++) { // Using `let` for block scoping
        fns.push(() => i);
    }
})();

// DO NOT MODIFY BELOW CODE

console.log(x * 2 === fns[x * 2]()); // true
