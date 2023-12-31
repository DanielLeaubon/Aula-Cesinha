const port = 8080;

//Express
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
const fs = require("fs");
app.set('view engine', 'ejs');
app.use(express.static('public'))

var vetornomes = []

if(fs.existsSync('nome.json')){
   const dados = fs.readFileSync('nome.json','utf-8')
   console.log(dados);
   vetornomes = JSON.parse(dados)
}


app.get("/", (request, response) => {
    resultado = ''
    response.render("index", {resultado})
    });
 app.post("/obrigado", (request, response) => {
    let nomeNoForm = request.body.nome
    let cadastro = {nome: nomeNoForm}
    vetornomes.push(cadastro)
    fs.writeFileSync('nome.json',`\n${JSON.stringify(vetornomes)}`)
    resultado = `Olá, ${cadastro.nome}`
    response.render("index", {cadastro});
 })
 app.get("/mostrar", (request, response) => {

    response.render("nomes",{vetornomes});
 })
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`)});