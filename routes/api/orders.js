const { application } = require('express');
const express = require('express');
const router = express.Router();

//Item Model
const Order = require('../../models/Order');

// @route GET api/products
// @desc Get All Products
// @access Public
router.get('/', (req, res) => {
    Order.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
});

// @route POST api/products
// @desc Create A Product
// @access Public
router.post('/', (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        address: req.body.address,
        date: req.body.date,
        cakes: req.body.cakes,
        cakeFlavour: req.body.cakeFlavour,
        cakeModel: req.body.cakeModel,
        kg: req.body.kg,
        message: req.body.message
    });

    newOrder.save()
           .then(item => res.json(item));
});

// @route DELETE api/products/:id
// @desc Delete A Product
// @access Public
router.delete('/:id', (req, res) => {
    Product.findById(req.params.id)
           .then(order => order.remove()
                                   .then(() => res.json({success: true})))
           .catch(err => res.status(404)
                            .json({success: false}));
        });
       

module.exports = router;
