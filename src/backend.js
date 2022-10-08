var proxy = require('express-http-proxy');
var cors = require('cors')
var app = require('express')()

app.use(cors())
app.use(proxy('https://hackathon.lsp.team/hk'));

app.listen(4000);