const port = 8080;

//Express
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
const fs = require("fs");
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get("/", (request, response) => {
    resultado = ''
    response.render("index", {resultado})
    });
 app.post("/obrigado", (request, response) => {
    
    let nomeNoForm = request.body.nome
    let cadastro = {nome: nomeNoForm}
    fs.appendFileSync('nome.json',`\n ${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${cadastro.nome}`
    response.render("index", {resultado});
 })
 app.get("/tec", (request, response) => {
    response.render("tec");
 })
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`)});
console.log(`Servidor funcionando na porta: ${port}`)