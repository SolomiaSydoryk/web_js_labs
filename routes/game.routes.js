const Router = require("express");
const router = new Router();
const gameController = require("../controller/game.controller");

router.post("/game", gameController.createGame);
router.get("/game", gameController.getAllGames);
router.get("/game/:id", gameController.getOneGame);
router.put("/game", gameController.updateGames);
router.delete("/game/:id", gameController.deleteGame);
router.get("/gamesort", gameController.getSortedGames);

module.exports = router;
