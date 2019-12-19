const app = require("http");
app.createServer((req, res) => {
    console.log(req.url)
    res.send(req.url);
}).listen(3000)