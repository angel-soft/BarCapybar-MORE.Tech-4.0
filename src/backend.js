var axios = require('axios');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = require('express')()

const baseUrl = 'https://hackathon.lsp.team/hk'

app.use(cors())
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({ extended: true }))
app.get('*',async (req, res) => {
    const { data } = await axios.get(`${baseUrl}${req.path}`, req.query)
    res.json(data)
})
app.post('*',async (req, res) => {
    const { data } = await axios.post(`${baseUrl}${req.path}`, req.body)
    res.json(data)
})
app.listen(4000);