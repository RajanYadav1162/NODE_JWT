const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./database/connection");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const cors = require("cors");
dotenv.config();

const app = express();
//cors middleware
let corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true
}
app.use(cors(corsOptions));

//middlewares for forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for setting up cookies
app.use(cookieParser());

//user Route-->MIDDLEWARE NEED TO AT TOP
app.use("/user", userRouter);

//AUTH ROUTE
app.use("/auth", authRouter);

//home route
app.get("/", (req, res) => res.send("Hello React + JWT"));

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(process.env.PORT, () =>
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
  );
};

start();
