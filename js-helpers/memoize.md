const memoize = (fn) => {
  let cache = {};
  return (num) => {
    if (num in cache) {
      console.log('Fetching from cache for ' + num);
      return cache[num];
    }
    else {
      console.log('Calculating result for ' + num);
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
