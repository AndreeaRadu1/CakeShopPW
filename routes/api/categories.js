const { application } = require('express');
const express = require('express');
const router = express.Router();

//Item Model
const Category = require('../../models/Category');

// @route GET api/categories
// @desc Get All Categories
// @access Public
router.get('/', (req, res) => {
    Category.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
});

// @route POST api/categories
// @desc Create A Category
// @access Public
router.post('/', (req, res) => {
    const newCategory = new Category({
        title: req.body.title,
        category: req.body.category
    });

    newCategory.save()
           .then(item => res.json(item));
});

// @route DELETE api/categories/:id
// @desc Delete A Category
// @access Public
router.delete('/:id', (req, res) => {
    Category.findById(req.params.id)
           .then(product => product.remove()
                                   .then(() => res.json({success: true})))
           .catch(err => res.status(404)
                            .json({success: false}));
        });
       

module.exports = router;
