const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('boardwrite');
});

router.post('/', async (req, res, next) => {
    try {
      const comment = await Comment.create({
        id: req.body.id,
        comment: req.body.comment,
      });
      console.log(comment);
      res.status(201).json(comment);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });
  
  router.route('/:id')
    .patch(async (req, res, next) => {
      try {
        const result = await Comment.update({
          comment: req.body.comment,
        }, {
          where: { id: req.params.id },
        });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const result = await Comment.destroy({ where: { id: req.params.id } });
        res.json(result);
      } catch (err) {
        console.error(err);
        next(err);
      }
    });
  
module.exports=router;