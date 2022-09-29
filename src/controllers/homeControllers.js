const panth = require('path');

const controlador = {
    index: (req, res) =>{
        res.sendFile(panth.resolve(__dirname, '../views/index.html'));
    },

    login: (req, res) =>{
        res.sendFile(panth.resolve(__dirname, '../views/login.html'));
    },

    registro: (req, res) =>{
        res.sendFile(panth.resolve(__dirname, '../views/registro.html'));
    }
}


module.exports = controlador;