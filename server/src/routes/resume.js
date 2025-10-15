const { Router } = require('express');
const { celebrate } = require('celebrate');

const router = new Router();

router.get(
  '/',
  // celebrate(getResumeSchema),
  (req, res) => res.json({})
);
router.get(
  '/:id',
  // celebrate(getResumeSchema),
  (req, res) => res.json({})
);

module.exports = router;
