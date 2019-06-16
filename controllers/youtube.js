const express = require('express');
const router = express.Router();
const model = require('../models/youtube.js')

router.post('/', (req, res)=>{
  model.create(req.body, (createdElement, error) => {
    res.json(createdElement)
  })
});

router.get('/', (req,res) => {
  res.send('testing')
})

module.exports = router;
