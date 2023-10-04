const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');


app.get("/cadastro", (request, response) => {
    response.render("cadastro"); // views/server.ejs
    });
 app.get("/olazin", (req, res) => {
    const data = {
        nome: req.query.nome,
        sobrenome: req.query.sobrenome,
        cidade: req.query.cidade
    }
    res.render('olazin', { data });
 })
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});