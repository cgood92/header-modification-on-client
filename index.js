const express = require('express')
const app = express()

app.get('/:link', function(req, res) {
	const url = 'http://localhost:3001/images/this-is-the-path-to-the-image'
	const username = 'admin@user.com'
	const apiKey = '123456'
	const method = 'GET'
	res.send(`<html>
        <head>
            <script type="text/javascript">
            const config = {
                method: '${method}',
                headers: new Headers({
                    username: '${username}',
                    apiKey: '${apiKey}',
                }),
                mode: 'cors',
                cache: 'default',
            }
            
            fetch('${url}', config)
                .then(function(response) {
                    return response.blob()
                })
                .then(function(myBlob) {
                    window.location = URL.createObjectURL(myBlob)
                })
            </script>
        </head>
        <body></body>
    </html>`)
})

app.listen(3000, function() {
	console.log('Main service is running on http://localhost:3000/')
})
