  var request = require('supertest')
    , express = require('express');

  var app = require('../app.js');

  describe('GET /', function(){
    it('responde a la solicitud', function(done){
      request(app)
        .get('/')
        .expect(200, done);
    })
  })

   describe('POST /user', function(){
    it('responde a la solicitud con JSON status:Error ', function(done){
     var datos = "email=emailnovalido&colores=on&number=2";
      request(app)
        .post('/user')
        .send(datos)
        .expect('Content-Type', /json/)
        .expect('{"status":"Error"}', done);
     
    })
  })

      describe('POST /user', function(){
    it('responde a la solicitud con JSON status:Valido', function(done){
    var datos = "email=email@valido.com&colores=on&number=2";
      request(app)
        .post('/user')
        .send(datos)
        .expect('Content-Type', /json/)
        .expect('{"status":"Valido!"}', done);
     
    })
  })


