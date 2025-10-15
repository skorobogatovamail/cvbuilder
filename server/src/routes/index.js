const { Router } = require('express');
const userRouter = require('./user');
const resumeRouter = require('./resume');
const aiRouter = require('./ai');

const router = new Router();

router.use('/user', userRouter);
router.use('/resume', resumeRouter);
router.use('/ai', aiRouter);

module.exports = { router };
