# Make Counter

Implement a function `makeCounter` that accepts an optional integer value and
returns a function. When the returned function is called initially, it returns
the initial value if provided, otherwise 0. The returned function can be called
repeatedly to return 1 more than the return value of the previous invocation.

## Examples

```js
const counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2
```

With a custom initial value:

```javascript
const counter = makeCounter(5);
counter(); // 5
counter(); // 6
counter(); // 7
```

## How it works

- `initialValue`: optional parameter, defaults to 0.
- `count`: local let variable initialized to initialValue.
- **Closure**: The function returns `() => { return count++; }` which:
  - Captures `count` by closure.
  - Uses post-increment (`count++`): returns the current value, then increments
    `count`.
- `Behavior example`:
  - `const c = makeCounter(5); c()` returns `5`; next `c()` returns `6`, then
    `7`, etc.
