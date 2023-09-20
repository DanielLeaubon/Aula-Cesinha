const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2 e operacao para a rota /calcular')
})

app.get('/calcular', (req, res) => {
   let n1 = parseFloat(req.query.n1)
   let n2 = parseFloat(req.query.n2)
   let operacao = parseFloat(req.query.operacao)
    console.log("n1=" + req.query.n1)
    console.log("n2=" + req.query.n2)
    console.log("operacao=" + req.query.operacao)

if (operacao == "soma"){
    result = n1 + n2
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${n1} + ${n2} = ${result}`
    }

    res.send({ conta: result })
}
else if(operacao == "sub"){
    result = n1 - n2
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${n1} - ${n2} = ${result}`
    }

    res.send({ conta: result })
}
else if(operacao == "vezes"){
    result = n1 * n2
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${n1} x ${n2} = ${result}`
    }

    res.send({ conta: result })
}
else if(operacao == "divisao"){
    result = n1 / n2
    if (isNaN(result)&& n1==0 || n2== 0) {
        result = "Valores inválidos."
    } else {
        result = `${n1} / ${n2} = ${result}`
    }
    res.send({ conta: result })
}
})

   

app.listen(8080)