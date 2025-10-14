import { Router } from 'express';
import { celebrate } from 'celebrate';

const router = Router();

router.get('/resume', celebrate(getResumeSchema), getResume);
router.get('/resume/:id', celebrate(getResumeSchema), getResumeById);
