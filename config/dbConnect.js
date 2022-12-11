import mongoose from "mongoose";
import logger from "./myLogger.js";

let instance = null;

// const url =
//   "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority";

// class SingletonDBConnectClass {
//   constructor() {
//     this.connect = () => {
//       return mongoose.connect(
//         url,
//         { useNewUrlParser: true, useUnifiedTopology: true, dbName: "coloso" },
//         (err) => {
//           if (err) {
//             logger.error(err);
//             return;
//           }
//           logger.info("DB Connected");
//         }
//       );
//     };
//   }

//   static getInstance() {
//     if (!instance) {
//       instance = new SingletonDBConnectClass();
//     }
//     return instance;
//   }
// }

//export default SingletonDBConnectClass;

const myConnect = (url) => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "coloso" },
    (err) => {
      if (err) {
        logger.error(err);
        return;
      }
      logger.info("DB Connected");
    }
  );
};

const getDBConnectInstance = (url) => {
  if (!instance) {
    instance = myConnect(url);
  }
  return instance;
};
export default getDBConnectInstance;
