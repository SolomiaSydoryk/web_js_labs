const Router = require("express");
const router = new Router();
const gameController = require("../controller/game.controller");

router.post("/game", gameController.createGame);
router.get("/game", gameController.getAllGames);
router.get("/games", gameController.getDefaultGames);
router.get("/game/:id", gameController.getOneGame);
router.put("/game/:id", gameController.updateGame);
router.delete("/game/:id", gameController.deleteGame);

module.exports = router;
