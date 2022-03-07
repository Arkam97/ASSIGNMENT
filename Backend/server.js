let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
const productroutes = require("./routes/productroutes");
const fs = require('fs');

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/product', productroutes);

// PORT
const port = process.env.PORT || 5000;

app.use((error, req, res, next) => {
    if(req.file){
      fs.unlink(req.file.filename, err =>{
        console.log(err);
      });
    }
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });

mongoose
  .connect(
    'mongodb+srv://arkam:A777467304b@cluster-arkam.bav5m.mongodb.net/Assintment?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() => {
    app.listen(5000);
    console.log(`App Connected to database on port ${port}`);
  })
  .catch(err => {
    console.log(err);
  });