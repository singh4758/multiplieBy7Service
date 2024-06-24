import { Router } from "express";
import multiplierBy7Controller from "./dependencyInjection";

const router = Router();

router
  .route('/')
  .post(multiplierBy7Controller.write);

router
  .route('/')
  .get(multiplierBy7Controller.read);




export default router;