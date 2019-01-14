const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../react-client/dist')))
app.set('port', port)
app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.listen(port, () => console.log(`this blog is listening on port ${port}`))