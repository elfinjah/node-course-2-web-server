const _express = require('express');
const _hbs = require('hbs');

const port = process.env.port || 3000;
var app = _express(); 
 
_hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(_express.static(__dirname + '/public'));

_hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!!</h1>');
    res.render('home.hbs',{
        header: 'Welcome Elfin...',
        hobby:[
            'arduino',
            'RC'
        ]
        //currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        header: 'About Page'
        //currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "unable the request"
    });
});

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});