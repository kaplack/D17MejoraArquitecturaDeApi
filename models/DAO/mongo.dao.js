import mongoose from "mongoose";
import ProductBaseDAO from "./base.dao.js";
import createProductDTO from "../DTO/product.dto.js";
import ProductsModel from "../../models/products.models.js";
import logger from "../../config/myLogger.js";
import getDBConnectInstance from "../../config/dbConnect.js";

class ProductMongoDAO extends ProductBaseDAO {
  constructor(database, collection) {
    super();
    (async () => {
      logger.info("Connecting mongo DB ...");
      const url =
        "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority";

      const connection = getDBConnectInstance(url);

      this._collection = ProductsModel;
    })();
  }

  getProducts = async (_id) => {
    try {
      if (_id) {
        const newOne = await this._collection.findOne({
          _id: mongodb.ObjectId(_id),
        });

        return [newOne];
      }

      return await this._collection.find({});
    } catch (e) {
      console.log("Error to get products", e);

      return [];
    }
  };
  insertProduct = async (newToInsert) => {
    try {
      await this._collection.insertOne(newToInsert);

      return newToInsert;
    } catch (e) {
      console.log("Error to insert products", e);

      return newToInsert;
    }
  };
  //updateNoticia = async (_id, newToUpdate) => { throw new Error(`Method updateNoticia not implemeted`) }
  //deleteNoticia = async (_id, newToUpdate) => { throw new Error(`Method deleteNoticia not implemeted`) }
}

export default ProductMongoDAO;
