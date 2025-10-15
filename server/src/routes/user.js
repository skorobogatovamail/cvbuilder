const { Router } = require('express');

const router = new Router();

router.post('/register', (req, res) => res.json({ status: 'authenticated' }));
router.post('/login', (req, res) => res.json({ status: 'authenticated' }));
router.get('/auth', (req, res) => res.json({ status: 'authenticated' }));

module.exports = router;
