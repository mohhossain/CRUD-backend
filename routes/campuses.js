const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/campus/:id', async function(req,res,next){
    const camp= await Campus.findByPk(req.params.id)
    res.send(camp)
  })



// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;