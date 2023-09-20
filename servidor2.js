const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2  para a rota /soma ou /mult ou /sub ou /div')
})

app.get('/soma', (req, res) => {
   let n1 = parseFloat(req.query.n1)
   let n2 = parseFloat(req.query.n2)
   
    console.log("n1=" + req.query.n1)
    console.log("n2=" + req.query.n2)
    result = n1 + n2
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${n1} + ${n2} = ${result}`
    }

    res.send({ conta: result })
})
app.get('/mult', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)
    
     console.log("n1=" + req.query.n1)
     console.log("n2=" + req.query.n2)
     result = n1 * n2
     if (isNaN(result)) {
         result = "Valores inválidos."
     } else {
         result = `${n1} x ${n2} = ${result}`
     }
 
     res.send({ conta: result })
 })
 app.get('/sub', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)
    
     console.log("n1=" + req.query.n1)
     console.log("n2=" + req.query.n2)
     result = n1 - n2
     if (isNaN(result)) {
         result = "Valores inválidos."
     } else {
         result = `${n1} - ${n2} = ${result}`
     }
 
     res.send({ conta: result })
 })
 app.get('/div', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)
    
     console.log("n1=" + req.query.n1)
     console.log("n2=" + req.query.n2)
     result = n1 / n2
     if (isNaN(result) || n2== 0) {
         result = "Valores inválidos."
     } else {
         result = `${n1} / ${n2} = ${result}`
     }
 
     res.send({ conta: result })
 })
app.listen(8080)