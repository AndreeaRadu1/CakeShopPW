const { application } = require('express');
const express = require('express');
const router = express.Router();

//Item Model
const Product = require('../../models/Product');

// @route GET api/products
// @desc Get All Products
// @access Public
router.get('/', (req, res) => {
    Product.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
});

// @route POST api/products
// @desc Create A Product
// @access Public
router.post('/', (req, res) => {
    const newProduct = new Product({
        name: req.body.name
    });

    newProduct.save()
           .then(item => res.json(item));
});

// @route DELETE api/products/:id
// @desc Delete A Product
// @access Public
router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
           .then(product => product.remove()
                                   .then(() => res.json({success: true})))
           .catch(err => res.status(404)
                            .json({success: false}));
        });
       

module.exports = router;
