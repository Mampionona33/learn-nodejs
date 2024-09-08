import express, { Request, Response } from "express";
import productController from "../controllers/ProductController";

const router = express.Router();

router.post("/", (req: Request, res: Response) =>
  productController.create(req, res)
);

export default router;
