const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// serve static HTML and other files inside /public

app.use(express.static('public'));

// test route to return a message
app.get('/api/message', (req, res) => {
  res.send('Containers: $web, mycontainer | Latest message: Hello from the app');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
