import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class ProductController {
  public async create(req: Request, res: Response) {
    const newProduct = await prisma.product.create({
      data: {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        supplier: req.body.supplier,
      },
    });
  }
}

const productController = new ProductController();

export default productController;
