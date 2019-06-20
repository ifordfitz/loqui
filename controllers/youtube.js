const express = require('express');
const router = express.Router();
const model = require('../models/youtube.js')

router.post('/', (req, res)=>{
  model.create(req.body, (error, createdElement) => {
    res.json(createdElement)
  })
});

router.get('/', (req,res) => {
  model.find({}, (err, foundModels)=>{
        res.json(foundModels);
    });
})


router.delete('/:id', (req, res)=>{
    model.findByIdAndRemove(req.params.id, (err, deletedModels)=>{
        res.json(deletedModels);
    });
});

module.exports = router;
