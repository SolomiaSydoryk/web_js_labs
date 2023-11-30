const express = require("express");
const cors = require("cors");
const gameRouter = require("./routes/game.routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", gameRouter);

app.listen(PORT, () => {
  console.log(`Server listen http://localhost:%s`, PORT);
});
