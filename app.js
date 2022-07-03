const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res.send(
    'Welcome to your backend Nodejs/Express MySQL Sequelize-ORM server ...'
  );
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(
    `Your node/express API server is running on http://localhost:${PORT} ... `
  );
});
