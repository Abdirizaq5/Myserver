import express from 'express'

var app = express();


app.listen(3001, () => {
    console.log('The server is running!!');
});

// Let's define an endpoint'
app.get('/', (req, res) => {
    //Here we go if this endpoint is called (e.g. from browser)
    res.send('<h1>You just called root endpoint!!</h1>');
});

//Another endpoint 
app.get('/user', (req, res) => {
    res.send('Getting user information');
});
