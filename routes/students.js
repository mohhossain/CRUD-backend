const express = require('express');
const router = express.Router();
const { Student } = require('../database/models');
const app = express();

router.get('/', function(req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err))
});

app.get('/students', async function(req, res, next){
  Student.findAll()
    .then(students => res.json(students))
    .catch(err => console.log(err))
})

app.get('/students/:id', async function(req,res,next){
  const stud= await Student.findByPk(req.params.id)
  res.send(stud)
})

var PORT = 3030; 
  
app.listen(PORT, function(err){ 
    if (err) console.log("Error in server setup") 
    console.log("Server listening on Port", PORT); 
})

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
