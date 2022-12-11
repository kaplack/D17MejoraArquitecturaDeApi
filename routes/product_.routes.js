import express from "express";
import ProductController from "../controller/products.controller.js";

const router = express.Router();

class ProductRouter {
  constructor() {
    this.productController = new ProductController();
  }

  start() {
    router.get("/:id?", this.productController.getProducts);
    router.post("/", this.productController.insertProduct);

    return router;
  }
}

export default ProductRouter;
