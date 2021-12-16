const express = require('express');
const router = express.Router();
const multer  = require('multer');
const moment = require('moment');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage }).array('my-file', 3)

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log('multer err >>>', err)
    } else if (err) {
      console.log('unknown err >>>', err)
    }
    console.log(req.body.person)
    console.log(req.file);
    res.send(`Hello ${req.body.person}`)
  })
  

});

module.exports = router;