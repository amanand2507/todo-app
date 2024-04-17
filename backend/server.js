
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/db.js");
const userRouter = require("./route/user.js");
const PORT = process.env.PORT || 5000;
const path = require("path")
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());


app.use("/api", userRouter);

// db init
connectToDb();

if (process.env.NODE_ENV !== 'development') {
	console.info("Frontend being served statically 📂");
	app.use(express.static(path.join(__dirname, "..", "client", "dist")));
	app.get("*", (req, res) => {
	  res.sendFile(
		path.resolve(__dirname, "..", "client", "dist", "index.html")
	  );
	});
}



app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
