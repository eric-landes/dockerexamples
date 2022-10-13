const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose')
  const uri = 'mongodb://localhost/Bookdb';
Book = require('./models/booklistmodel') //created model loading here

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(res=>{
     console.log("DB Connected!");
    }).catch(err => {
     console.log(Error, err.message);
   })
   console.log("In mongoose Conncect");
   app.use(express.urlencoded({ extended: true }))
   app.use(express.json());
   const routes = require('./routes/bookListRoutes'); //importing route
   routes(app); //register the route
   app.get('*', (req, res)=>{
   res.status(404).send({url: req.originalUrl + ' not found'})
   })
   

app.listen(port);
console.log('book list RESTful API server started on: ' + port);