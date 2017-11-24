const express = require('express')
const app = express()

app.get('/multiplicacao/', function (req, res) {
    var id = req.query.id;
    var array = id.split('*');
    var num1 = array[0];
    var num2 = array[1];
    var total = (+num1) * (+num2); 
    res.setHeader('Content-Type', 'application/json');
    res.end ( JSON.stringify({"Número 1":num1,"Número 2":num2,"Operacao":"multiplicação", Total: total}));
})

app.listen(3002, function () {
  console.log('Multiplicação rodando na porta 3002')
})
