import { Router } from 'express';
import multiplierBy7Router from './controller/multiplierBy7/router';

const router = Router();

router.use("/multiplierBy7", multiplierBy7Router);

export default router;