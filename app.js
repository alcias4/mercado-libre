const homeRouters = require('./src/routes/homeRouters')
const express = require('express');
const panth = require('path');
const app = express();
/*app.listen(3001, function(){
    console.log('run server')
});*/


app.use(express.static(panth.join(__dirname, 'public')));

app.use('/', homeRouters); // se concatena a la ruta del primer y segundo parámetro

app.listen(process.env.PORT || 3000, function (){
    console.log('run server');
})