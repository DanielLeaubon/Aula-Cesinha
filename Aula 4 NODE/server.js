const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');


app.get("/calculadora", (request, response) => {
    response.render("calculadora"); // views/server.ejs
    });
 app.get("/calcular", (req, res) => {
    const data = {
        n1: req.query.n1,
        n2: req.query.n2,
        operacao: req.query.operacao
    }
    if(data.operacao == "+"){
        data.resultado = parseFloat(data.n1) + parseFloat(data.n2)
    }
    else if(data.operacao == "x"){
        data.resultado = parseFloat(data.n1) * parseFloat(data.n2)
    }
    else if(data.operacao == "/"){
        data.resultado = parseFloat(data.n1) / parseFloat(data.n2)
    }
    else if(data.operacao == "-"){
        data.resultado = parseFloat(data.n1) - parseFloat(data.n2)
    }
    res.render('calcular', { data });
 })
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});