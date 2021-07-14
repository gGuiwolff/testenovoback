const express = require("express");
const app = express();
const cors = require("cors");

//middleware

app.use(cors());
app.use(express.json());

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/profile", require("./routes/dashboard"));

app.use("/upload", require("./routes/dashboard"));

app.use("/galeria", require("./routes/dashboard"));

app.use('/teste', require('./routes/teste'))

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is starting on port 5000`);
});
