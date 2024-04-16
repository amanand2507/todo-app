const app = require("./app.js");
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
