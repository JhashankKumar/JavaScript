## ⚡ Difference: `deposit` vs `withdraw`

| Feature | `deposit` | `withdraw` |
|--------|----------|-----------|
| Function type | Regular function | Arrow function |
| Syntax | `function deposit()` | `(amount) => {}` |
| `this` binding | Has its own `this` | Inherits `this` from parent |
| Hoisting | Named function (better debugging) | Not hoisted |
| Use case here | Adds money | Removes money with validation |

---

## 🚨 Important Difference (REAL INTERVIEW POINT)

### 🔹 `this` Behavior

- `deposit` → has its own `this`  
- `withdraw` → does **not** have its own `this`, uses outer scope  

👉 In this code, `this` is **not used**, so:

✅ Both functions work the same in this case

---

## 🏆 Best Practice

For object methods:

👉 Prefer **regular functions**, because:

- They behave predictably with `this`
- They follow standard JavaScript conventions
- They are easier to debug (named functions)