const expess = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const port = 3000
const app = expess()

app.use(morgan('dev'))
app.engine('hbs', engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/new', (req, res)=> {
    res.render('new')
})
app.listen(port, ()=>console.log(`Example app listening at http://localhost:${port}`))