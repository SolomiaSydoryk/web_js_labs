import { getAllGames, postGame, deleteGameById } from "./api.js";

let games = [];
let searchResults = games.slice();
let sortGames = false;

const saveGame = () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = parseFloat(document.getElementById("price").value);
    const type = document.getElementById("type").value;

    if (name.trim() === "" || description.trim() === "" || isNaN(price) || type.trim() === "") {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    const duplicateGame = games.find(game => {
        return (
            game.name === name &&
            game.description === description &&
            parseFloat(game.price) === price &&
            game.type === type
        );
    });

    if (duplicateGame) {
        alert("Така гра вже існує.");
        return;
    }

    const game = {
        name: name,
        description: description,
        price: price,
        type: type
    };

    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = games.slice();
    } else {
        searchResults = games.filter((game) => {
            return game.name.toLowerCase().includes(findInput);
        });
    }

    postGame(game)
        .then(() => {
            displayAllGames();
        })
        .catch((error) => {
            console.error("Error while saving the game: ", error);
        });
};

function sortByPrice() {
    sortGames = !sortGames;

    if (sortGames) {
        searchResults.sort((a, b) => a.price - b.price);
    } else {
        searchResults.sort((a, b) => b.price - a.price);
    }

    displayGames(searchResults);
}

function displayGames(gamesToDisplay) {
    const gamesList = document.getElementById("game-list");
    gamesList.innerHTML = "";

    gamesToDisplay.forEach((game) => {
        const gameInfo = document.createElement("div");
        gameInfo.classList.add("game-info");

        gameInfo.innerHTML = `
            <h3>${game.name}</h3>
            <p><strong>Description:</strong> ${game.description}</p>
            <p><strong>Price:</strong> ${game.price}</p>
            <p><strong>Type:</strong> ${game.type}</p>
            <button type="button" class="delete_button" onclick="deleteGame(${game.id})">Delete</button>
            <button type="button" class="edit_button" onclick="editGame(${game.id})">Edit</button>
        `;

        gamesList.appendChild(gameInfo);
    });
}

const displayAllGames = async () => {
    try {
        const disGames = await getAllGames();
        games = disGames;
        searchResults = games.slice();
        displayGames(games);
    } catch (error) {
        console.error("Error while fetching games: ", error);
    }
};

function calculateTotalPrice() {
    let totalPrice = 0;

    const gameListToCalculate = searchResults.length > 0 ? searchResults : games;

    gameListToCalculate.forEach((game) => {
        totalPrice += parseFloat(game.price);
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: ${totalPrice}`;
}

function searchGame() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = games.slice();
    } else {
        searchResults = games.filter((game) => {
            return game.name.toLowerCase().includes(findInput);
        });
    }

    sortByPrice();
    calculateTotalPrice();

    displayGames(searchResults);
}

function clearSearch() {
    document.getElementById("find_input").value = "";
    searchResults = games.slice();

    sortByPrice();
    calculateTotalPrice();

    displayGames(searchResults);
}

function deleteGame(id) {
    deleteGameById(id)
        .then(() => {
            displayAllGames();
        })
        .catch((error) => {
            console.error("Error while deleting the game: ", error);
        });
}

displayAllGames();
