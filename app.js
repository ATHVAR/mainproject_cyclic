const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());
const db = require("./db/index");
const api=require("./router/router");
app.use('/',api);
const path = require('path');
app.use(express.static('./Backend/frontend'));

app.use(express.static(path.join(__dirname,'frontend')))

app.get('*', async(req, res)=> {
        res.sendFile(path.join(__dirname ,'frontend','index.html'))});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
