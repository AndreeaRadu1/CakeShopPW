const { application } = require('express');
const express = require('express');
const router = express.Router();

//Item Model
const Gallery = require('../../models/Gallery');

// @route GET api/products
// @desc Get All Products
// @access Public
router.get('/', (req, res) => {
    Gallery.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
});

// @route POST api/products
// @desc Create A Product
// @access Public
router.post('/', (req, res) => {
    const newPhoto = new Gallery({
        image: req.body.image
    });

    newPhoto.save()
           .then(item => res.json(item));
});

// @route DELETE api/products/:id
// @desc Delete A Product
// @access Public
router.delete('/:id', (req, res) => {
    Gallery.findById(req.params.id)
           .then(photo => photo.remove()
                                   .then(() => res.json({success: true})))
           .catch(err => res.status(404)
                            .json({success: false}));
        });
       

module.exports = router;
