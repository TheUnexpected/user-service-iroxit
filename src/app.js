const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRouters);

app.listen(PORT, () => {
  console.log(`User Management Service running on port ${PORT}`);
});