Memoized factorial function

```
const memoize = (fn) => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      return cache[num];
    } else {
      let output = fn(num);
      cache[num] = output;

      return output;
    }
  }
}

let factorial = (x) => {
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

factorial = memoize(factorial);

console.log(factorial(3));
```

Memoized fibonacci function

```
function memoizeFunction(fn) {
  let cache = {};

  return function() {
    let key = arguments[0];

    if (cache[key]) {
      return cache[key];
    } else {
      let val = fn.apply(this, arguments);

      cache[key] = val;

      return val;
    }
  }
}

let fibonacci = memoizeFunction(function(n) {
  return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```
