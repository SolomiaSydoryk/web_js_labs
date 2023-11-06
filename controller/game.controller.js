const db = require("../db");

class GameController {
  async createGame(req, res) {
    const { name, description, price, type } = req.body;
    const newGame = await db.query(
      `INSERT INTO games (name, description, price, type) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, description, price, type]
    );

    const allGames = await db.query(`SELECT * FROM games`);
    res.json(allGames.rows);
  }

  async getAllGames(req, res) {
    const allGames = await db.query(`SELECT * FROM games`);
    res.json(allGames.rows);
  }

  async getOneGame(req, res) {
    const id = req.params.id;
    const oneGame = await db.query(
      `SELECT * FROM games WHERE id = $1`,
      [id]
    );
    res.json(oneGame.rows[0]);
  }

  async getSortedGames(req, res) {
    const sortedGames = await db.query(`SELECT * FROM games ORDER BY price`);
    res.json(sortedGames.rows);
  }

  async updateGames(req, res) {
    const { id, name, price, description, type } = req.body;
    const game = await db.query(
      `UPDATE games SET name = $1, description=$2, price = $3, type = $4 WHERE id = $5 RETURNING *`,
      [name, description, price, type, id]
    );
    res.json(game.rows[0]);
  }

  async deleteGame(req, res) {
    const id = req.params.id;
    const game = await db.query(`DELETE FROM games WHERE id = $1`, 
    [id]
    );
    res.json(game.rows[0]);
  }
}

module.exports = new GameController();
