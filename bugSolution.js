```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    const data = await req.json();
    // ... further processing of data ...
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON request body' });
  }
}
```