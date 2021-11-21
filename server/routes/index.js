import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, _next) {
	res.json('OK');
});

export default router;
