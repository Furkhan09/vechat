import "dotenv/config";
import express from "express";
const app = express();
import connectDB from "./config/db.js";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
// import messageRoutes from "./routes/messages.js";
//import initSocket from "./services/socketService.js";
//import errorHandler from "./utils/errorHandler.js";

// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// // Middleware
// app.use(cors());
app.use(express.json());

// //Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// // app.use("/api/messages", messageRoutes);

// //Initialize socket.io
// //initSocket(io);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
