```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Accessing req.body directly might cause issues if the body is not a JSON object.
  const data = req.body;
  // ... further processing of data ...
}
```