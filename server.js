const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Jenkins build successfully complete");
});

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`App listening on port ${port}`));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
