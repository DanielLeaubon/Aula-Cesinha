const port = 8080;

//Express
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get("/", (request, response) => {
    response.render("index"); // views/server.ejs
    });
 app.get("/rep", (request, response) => {
    response.render("rep");
 })
 app.get("/tec", (request, response) => {
    response.render("tec");
 })
app.use((request, response, next) => {
response.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});