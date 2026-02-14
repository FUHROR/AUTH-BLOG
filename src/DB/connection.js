// import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize("blog-oravision", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: true,
// });

// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database Connected Successfully (LOCAL)");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };

// import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//     port: process.env.DB_PORT,
//     logging: false,
//   },
// );

// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database Connected Successfully");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };

import dotenv from "dotenv";
dotenv.config(); // لازم يبقى أول حاجة

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: false,
  },
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
