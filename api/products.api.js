import ProductFactoryDAO from "../models/DAO/product.factory.js";
import config from "../config/config.js";
import logger from "../config/myLogger.js";

class ProductAPI {
  constructor() {
    this.productDAO = ProductFactoryDAO.get(config.TYPE_DB);
    logger.info(this.noticiaDAO);
  }

  async getProducts(id) {
    return await this.productDAO.getProducts(id);
  }

  async insertProduct(newToInsert) {
    return await this.productDAO.insertProduct(newToInsert);
  }
}

export default ProductAPI;
