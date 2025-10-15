const { Router } = require('express');

const router = new Router();

router.post('/generate', (req, res) => res.json({}));

module.exports = router;
