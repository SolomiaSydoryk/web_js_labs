import { getAllGames,updateGame, postGame, deleteGameById } from "./api.js";

let games = [];
let searchResults = games.slice();
let editingGameId = null;


const saveGame = () => {
    const nameInput = document.getElementById("name");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");
    const typeInput = document.getElementById("type");
    const findInput = document.getElementById("find_input");

    const name = nameInput.value;
    const description = descriptionInput.value;
    const price = parseFloat(priceInput.value);
    const type = typeInput.value;

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

    nameInput.value = "";
    descriptionInput.value = "";
    priceInput.value = "";
    typeInput.value = "";
    findInput.value = "";

    postGame(game)
        return baseRequest({ method: "POST", body })
        .then((data) => {
            console.log(data);
            games = disGames;
        searchResults = games.slice();
        console.log(games);
        displayGames(games);
        })
        .catch((error) => {
            console.error("Error while saving the game: ", error);
        });
};

const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", () => {
    saveGame();
});

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
            <button type="button" class="edit_button" data-id="${game.id}">Edit</button>
            <button type="button" class="delete_button" onclick="deleteGame(${game.id})">Delete</button>
        `;

        gamesList.appendChild(gameInfo);
    });
    attachEditButtonEvents();
    attachDeleteButtonEvents();
}

const displayAllGames = async () => {
    try {
        const disGames = await getAllGames();
        games = disGames;
        searchResults = games.slice();
        console.log(games);
        displayGames(games);
    } catch (error) {
        console.error("Error while fetching games: ", error);
    }
};

function sortByPrice() {
    searchResults.sort((a, b) => b.price - a.price);
    displayGames(searchResults);
}

const sortButton = document.getElementById("sort_button");

sortButton.addEventListener("click", sortByPrice);

function calculateTotalPrice() {
    let totalPrice = 0;

    const gameListToCalculate = searchResults.length > 0 ? searchResults : games;

    gameListToCalculate.forEach((game) => {
        totalPrice += parseFloat(game.price);
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

const countButton = document.getElementById("count_button");

countButton.addEventListener("click", calculateTotalPrice);


function searchGame() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    if (findInput.trim() === "") {
        searchResults = games.slice();
    } else {
        searchResults = games.filter((game) => {
            return game.name.toLowerCase().includes(findInput);
        });
    }

    displayGames(searchResults);
}

const searchButton = document.getElementById("search_button");

searchButton.addEventListener("click", () => {
    searchGame();
});


function clearSearch() {
    document.getElementById("find_input").value = "";
    searchResults = games.slice();

    displayGames(searchResults);
}

const clearButton = document.getElementById("clear_button");

clearButton.addEventListener("click", () => {
    clearSearch();
});

function deleteGame(id) {
    deleteGameById(id)
        .then(() => {
            displayAllGames();
        })
        .catch((error) => {
            console.error("Error while deleting the game: ", error);
        });
}

function attachDeleteButtonEvents() {
    const deleteButtons = document.getElementsByClassName("delete_button");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            const gameId = games[i].id;
            return function() {
                deleteGame(gameId);
            };
        }());
    }
}

function attachEditButtonEvents() {
    const editButtons = document.getElementsByClassName("edit_button");
    for (let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", function () {
        const gameId = editButtons[i].getAttribute("data-id");
        editGame(gameId);
      });
    }
  }

const editModal = document.getElementById("myModal");
const editNameInput = document.getElementById("edit-name");
const editDescriptionInput = document.getElementById("edit-description");
const editPriceInput = document.getElementById("edit-price");
const editTypeSelect = document.getElementById("edit-type");
const saveButton = document.getElementById("save_button");
const cancelButton = document.getElementById("cancel_button");
const closeButton = document.querySelector(".close");

function editGame(id) {
    editingGameId = parseInt(id);

    const gameToEdit = games.find(game => game.id === editingGameId);

    if (gameToEdit) {
        editNameInput.value = gameToEdit.name;
        editDescriptionInput.value = gameToEdit.description;
        editPriceInput.value = gameToEdit.price;
        editTypeSelect.value = gameToEdit.type;
    
        editModal.style.display = "block";
      } else {
        console.error("Гру не знайдено");
      }
}

saveButton.addEventListener("click", () => {
    const newName = editNameInput.value;
    const newDescription = editDescriptionInput.value;
    const newPrice = parseFloat(editPriceInput.value);
    const newType = editTypeSelect.value;

    if (newName.trim() === "" || newDescription.trim() === "" || isNaN(newPrice) || newType.trim() === "") {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }

    const updatedGame = {
        id: editingGameId,
        name: newName,
        description: newDescription,
        price: newPrice,
        type: newType
    };

    updateGame(editingGameId, updatedGame)
        .then(() => {
            displayAllGames();
            editModal.style.display = "none";
        })
        .catch((error) => {
            console.error("Помилка під час оновлення гри: ", error);
        });
});

cancelButton.addEventListener("click", () => {
    editNameInput.value = "";
    editDescriptionInput.value = "";
    editPriceInput.value = "";
    editTypeSelect.value = "";
});

closeButton.addEventListener("click", () => {
    editModal.style.display = "none";
});


attachEditButtonEvents()

attachDeleteButtonEvents();

displayAllGames();
