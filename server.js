const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/routes')(app);

app.listen(8000, () => console.log("Now listening on port 8000"));