const express = require('express')
const app = express()
const nodeport = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'baseDesafioNode',
    port: '3306'
}
const mysql = require('mysql')


app.get('/',(req,res) => {
    const connection = mysql.createConnection(config)
     connection.query(`INSERT INTO people(name) values('Kelton')`)

     connection.query(`SELECT name FROM people`, function (err, result) {
       let nomesLista ='';
       Object.keys(result).forEach(function(key) {
        nomesLista = nomesLista.concat(result[key].name,'<br>');
      });
       res.send(`<h1>Full Cycle Rocks!</h1> <br>${nomesLista}`)
       connection.end()
     });
})


// app.get('/',(req,res) => {
//     res.send('<h1>Full Cycle Rocks!</h1>')
// })

app.listen(nodeport, () => {
    console.log('Rodando na porta ' +nodeport)
})