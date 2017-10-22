var express = require('express')
var app = express()

const port = process.env.PORT || 4000;

app.use(express.static('app'))
app.get('/',function(req,res){
	res.sendFile('app/index.html')
})

app.listen(port);