var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// middleware
app.use(bodyParser.urlencoded({ extended: true }));

 
 // GET "/"
app.get('/', function (req, res) {
  res.render('index.jade');
})


// POST "/user"
app.post('/user', function (req, res) {
   
// obtenemos los datos provenientes de la FORM
   var email = req.body.email;
   var color = req.body.colores;
   var number = req.body.number;

// verificamos con REGREX   el email
   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var email_v= re.test(email);

// respuesta en JSON
      if (email_v && number && color ){
        res.send({ status: "Valido!" } );
      } else {
        res.send({ status: "Error" } );
      }
 });


app.use(express.static(__dirname + '/public'));
app.listen(3000);

// exporta el modulo para utilizar en tests
module.exports = app;