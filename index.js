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
import dotenv from "dotenv";
import bootstrap from "./src/appcontroller.js";

dotenv.config();

const app = express();

// نشغل كل الإعدادات والراوتات
await bootstrap(app, express);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
