const express = require('express');
const router = new express.Router();
const Product = require('../models/productmodel');
var  multer = require('multer');
const { v4: uuidv4 } = require('uuid');


DIR = './public/';


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
  });
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
  });

// router.post('/createproduct',upload.array('multipleImages',4), async (req,res) =>{
//     try {
//       const reqFiles = [];
//       const url = req.protocol + '://' + req.get('host');
//       console.log(req.body);
  
//       for (var i = 0; i < req.files.length; i++) {
//         reqFiles.push(url + '/public/' + req.files[i].filename)
//      }
    
//       const newProduct = new Product({
//         sku: req.body.sku,
//         imagecolection: reqFiles,      
//         pname: req.body.pname,
//         qty: req.body.qty,
//         discription: req.body.discription,
//       });
  
//       newProduct.save().then((result) => {
//         if(result != null)
//         {
//           return res.status(200).json(result)
//         }
//       }).catch((err) => {
//         return res.status(500).json({ error: err });
//       });
  
//     } catch (err) {
//       return res.status(500).json({err});
//     }
//   });


router.post('/createproduct', async (req,res) =>{
  try {

    const newProduct = new Product({
      sku: req.body.sku,
      selectedFile: req.body.selectedFile,      
      pname: req.body.pname,
      qty: req.body.qty,
      discription: req.body.discription,
    });

    await newProduct.save().then((result) => {
      if(result != null)
      {
        return res.status(200).json(result)
      }
    }).catch((err) => {
      return res.status(500).json({ error: err });
    });

  } catch (err) {
    return res.status(500).json({err});
  }
});

router.get('/getproducts', async (req, res) => { 
  try {
      const allproducts = await Product.find();
              
      res.status(200).json(allproducts);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
});

  module.exports = router;
  
