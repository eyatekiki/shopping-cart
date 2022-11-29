const express = require('express');
const router = express.Router();
const {getAll,addAccessorie,deleteAccessorie,update,getOne} = require('../controllers/accessories');


router.get('/getAll',getAll);
router.post('/add',addAccessorie);
router.delete ('/:id',deleteAccessorie);
router.put("/:id",update)
router.get('/:id',getOne)



module.exports = router