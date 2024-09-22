function foo() {}

function bar() {
  const a1 = [2, 4];
  const a2 = [6, 8, 10, 12];
  a1.pop();
  return [...a1.concat(a2.slice(1))];
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012'); // true
