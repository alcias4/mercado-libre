
const express = require('express');

const panth = require('path');

const app = express();

app.use(express.static(panth.join(__dirname, 'public')));

/*app.listen(3001,function(){
    console.log('run server');
});*/

app.get('/' , (req, res) =>{
    res.sendFile(panth.join(__dirname, './views/index.html'))
});

app.listen(process.env.PORT || 3000, function (){
    console.log('run server');
});