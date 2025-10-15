const { Router } = require('express');
const { celebrate } = require('celebrate');

const router = new Router();

router.get('/', celebrate(getResumeSchema), getResume);
router.get('/:id', celebrate(getResumeSchema), getResumeById);

module.exports = { router };
