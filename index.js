// import dotenv from "dotenv";
// dotenv.config();

// import cors from "cors";

// import express from "express";
// import bootstarp from "./src/appcontroller.js";

// const app = express();
// const port = 3000;

// app.use(cors());

// app.use(
//   cors({
//     origin: ["http://localhost:4200", "https://your-frontend-domain.com"],
//   }),
// );

// const startServer = async () => {
//   await bootstarp(app, express);

//   app.listen(port, () =>
//     console.log(`Server running on http://localhost:${port}`),
//   );
// };

// startServer();

import express from "express";

import { connectDB } from "./src/DB/connection.js";

const app = express();

app.use(express.json());
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);

// اتصال الداتا بيز
connectDB();

// Route تجريبي
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
