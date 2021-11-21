import { Router } from 'express';
var router = Router();

/* GET app healthcheck */
router.get('/', function(req, res, next) {
  res.json({msg: "I'm UP!"});
});

export default router;
