const express = require('express')
const app = express()

const cors = require('cors')

app.use(
	cors({
		'Access-Control-Allow-Methods': "'*'",
		'Access-Control-Allow-Headers': "'*'",
		'Access-Control-Allow-Origin': "'*'",
	})
)

app.get('/images/:image', function(req, res) {
	// Notice that the headers came through...
	console.log(req.headers)
	// Send response
	res.sendFile(`${__dirname}/helmet.jpeg`)
})

app.listen(3001, function() {
	console.log('External document storage running on http://localhost:3001/')
})
