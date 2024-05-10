//route file  handler using common js modules with require
const express = require('express')
const app = express()

//route handler looking for http reguest with the / to get info for a particulr route
app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})
//localhost:5000 running express server and listening on port 5000
// deployed this app through heroku
//dynamic port binding
const PORT = process.env.PORT || 5000 // THIS LOOKS AT UNDERLYING
//ENVIRONEMENT TO SEE WHAT PORT TO USE IN PRODUCTION OR LOCAL

app.listen(PORT, console.log('server listening on port 5000'))
