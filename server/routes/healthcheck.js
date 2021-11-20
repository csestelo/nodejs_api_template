import { Router } from 'express';
var router = Router();

/* GET app healthcheck */
router.get('/', function(req, res, next) {
  res.send('PING!');
});

export default router;
