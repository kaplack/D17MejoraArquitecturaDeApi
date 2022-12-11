import ProductAPI from "../api/products.api.js";
import logger from "../config/myLogger.js";

class ProductController {
  constructor() {
    this.productAPI = new ProductAPI();
  }

  getProducts = async (req, res) => {
    try {
      const id = req.params.id;
      const products = await this.productAPI.getProducts(id);
      logger.info(products);

      res.json(products);
    } catch (e) {
      logger.error("Error controller get product", e);
    }
  };

  insertProduct = async (req, res) => {
    try {
      const productToSave = req.body;
      const productSaved = await this.productAPI.insertProduct(productToSave);

      res.json(productSaved);
    } catch (e) {
      logger.error("Error controller insert product", e);
    }
  };
}

export default ProductController;
