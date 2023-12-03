const db = require("../db");

class GameController {
  async createGame(req, res) {
    const { name, description, price, type } = req.body;
    const newGame = await db.query(
      `INSERT INTO games (name, description, price, type) values ($1, $2, $3, $4) RETURNING *`,
      [name, description, price, type]
    );

    res.json(newGame.rows[0]);
  }

  async getAllGames(req, res) {
    const { sortGame, searchGame } = req.query;
    let query = "SELECT * FROM games";
    if (searchGame !== "") {
      query += " WHERE ";

      query += ` LOWER(name) LIKE LOWER('%${searchGame}%') `;
    }

    if (sortGame !== "") {
      if (sortGame === "1") {
        query += " ORDER BY name ASC";
      } else if (sortGame === "2") {
        query += " ORDER BY type ASC";
      } else {
        query += " ORDER BY price DESC";
      }
    }

    const sortedGames = await db.query(query);
    res.json(sortedGames.rows);
  }

  async getDefaultGames(_req, res) {
    const games = await db.query(`SELECT * FROM games`);
    res.json(games.rows);
  }

  async getOneGame(req, res) {
    const id = req.params.id;
    const oneGame = await db.query(`SELECT * FROM games WHERE games.id = $1`, [
      id,
    ]);
    res.json(oneGame.rows[0]);
  }

  async updateGame(req, res) {
    const { name, description, price, type, id } = req.body;
    const game = await db.query(
      `UPDATE games SET name = $1, type = $2, description = $3, price = $4 WHERE id = $5 RETURNING *`,
      [name, description, price, type, id]
    );
    res.json(game.rows);
  }
  async deleteGame(req, res) {
    const id = req.params.id;
    const game = await db.query(`DELETE FROM games WHERE id = $1`, [id]);
    res.json(game.rows[0]);
  }
}

module.exports = new GameController();
