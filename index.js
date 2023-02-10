const expess = require('express')
const app = expess()

const port = 3000
app.get('/tin-tuc', (req, res)=> res.send('Hello World'))
app.listen(port, ()=>console.log(`Example app listening at http://localhost:${port}`))