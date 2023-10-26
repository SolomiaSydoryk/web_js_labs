const express = require("express")
const gameRouter = require("./routes/game.routes");

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())
app.use("/api", gameRouter)
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.get("", (req, res) => {
    res.sendFile(__dirname +'/html/index.html');
  });

app.listen(PORT, () => {
    console.log("Server listening on http://localhost:%s", PORT);
});