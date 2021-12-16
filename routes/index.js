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
    cb(null, `${moment().format("YYYY-MM-DD-hhmmss")}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('my-file'), (req, res) => {
  console.log(req.body.person)
  console.log(req.file);
  

  const fullpath = path.dirname(__dirname) + '/upload/' + req.file.filename;
  const smallPath = './upload/' + req.file.filename;

  // console.log(fullpathArr);
    // res.send(`Hello ${req.body.person}<br><img src="${fullpath}">`)
    // res.send(`<img src="${fullpath}">`)
  res.send(fullpath)
});

module.exports = router;

