require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;
const db = require("./models");



const corsOptions = {
  origin: `http://locaalhost:${PORT}`,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res.send(
    'Welcome to your backend Nodejs/Express MySQL Sequelize-ORM server ...'
  );
});

db.sequelize.sync({force:true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.listen(PORT, () => {
  console.log(
    `Your node/express API server is running on http://localhost:${PORT} ... `
  );
});
