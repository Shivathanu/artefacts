## Get the range values without using loops

```
const range = (start, end) => Array.from({ length: end - start }, (_, i) => start+i)

range(1, 50);
```
