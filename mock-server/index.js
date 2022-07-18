const express = require('express');

const app = express();

app.use(express.json());
app.use('/avatars', express.static('./database/avatars/'));

const port = process.env.PORT || 3003;

app.listen(port, () => {
  console.log(`Server for online clothing store "Brand" is running on port ${port}`);
});
