let games = [];

function addGame() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const type = document.getElementById("type").value;

  if (!name || isNaN(price) || !type) {
    alert("Please fill in all required fields and enter a valid price.");
    return;
  }

  const game = {
    name: name,
    description: description,
    price: price,
    type: type,
  };

  games.push(game);

  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("type").value = "";

  displayGames();
}

function displayGames() {
  const gameContainer = document.getElementById("game-list");

  gameContainer.innerHTML = "";

  games.forEach((game, index) => {
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game-item");

    const gameInfo = `
      <h3>${game.name}</h3>
      <p>Description: ${game.description}</p>
      <p>Price: $${game.price.toFixed(2)}</p>
      <p>Type: ${game.type}</p>
    `;

    gameDiv.innerHTML = gameInfo;

    const editButton = document.createElement("button");
    editButton.classList.add("edit_button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      openEditModal(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete_button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      gameContainer.removeChild(gameDiv);
      games.splice(games.indexOf(game), 1);
    });

    gameDiv.appendChild(editButton);
    gameDiv.appendChild(deleteButton);

    gameContainer.appendChild(gameDiv);
  });
}

function sortByPrice() {
  const searchInput = document.getElementById("find_input").value.trim().toLowerCase();

  if (searchInput === "") {
    games.sort((a, b) => b.price - a.price);
  } else {
    const searchResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );

    searchResults.sort((a, b) => b.price - a.price);
    displaySearchResults(searchResults);
    return;
  }

  displayGames();
}


function calculateTotalPrice() {
  const totalPriceElement = document.getElementById("totalPrice");
  let total = 0;

  const searchInput = document.getElementById("find_input").value.trim().toLowerCase();

  if (searchInput === "") {
    total = games.reduce((tot, game) => tot + game.price, 0);
  } else {
    const searchResults = games.filter((game) =>
      game.name.toLowerCase().includes(searchInput)
    );

    total = searchResults.reduce((tot, game) => tot + game.price, 0);
  }

  totalPriceElement.textContent = `Total Price: $${total.toFixed(2)}`;
}


function searchGame() {
  const searchInput = document.getElementById("find_input").value.trim().toLowerCase();
  if (searchInput === "") {
    displayGames();
    return;
  }

  const searchResults = games.filter((game) =>
    game.name.toLowerCase().includes(searchInput)
  );
  displaySearchResults(searchResults);
}

function displaySearchResults(searchResults) {
  const gameContainer = document.getElementById("game-list");
  gameContainer.innerHTML = "";

  if (searchResults.length === 0) {
    gameContainer.innerHTML = "<p>No matching games found.</p>";
  } else {
    searchResults.forEach((game, index) => {
      const gameDiv = document.createElement("div");
      gameDiv.classList.add("game-item");

      const gameInfo = `
        <h3>${game.name}</h3>
        <p>Description: ${game.description}</p>
        <p>Price: $${game.price.toFixed(2)}</p>
        <p>Type: ${game.type}</p>
      `;

      gameDiv.innerHTML = gameInfo;
      const editButton = document.createElement("button");
      editButton.classList.add("edit_button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        openEditModal(games.indexOf(game));
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete_button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        gameContainer.removeChild(gameDiv);
        games.splice(games.indexOf(game), 1);
      });
  
      gameDiv.appendChild(editButton);
      gameDiv.appendChild(deleteButton);
  
      gameContainer.appendChild(gameDiv);
    });
  }
}


function clearSearch() {
  const searchInput = document.getElementById("find_input");
  searchInput.value = "";

  displayGames();
}

document.getElementById("clear_button").addEventListener("click", clearSearch);
document.getElementById("search_button").addEventListener("click", searchGame);
document.getElementById("count_button").addEventListener("click", calculateTotalPrice);
document.getElementById("submit_button").addEventListener("click", addGame);
document.getElementById("sort_button").addEventListener("click", sortByPrice);

displayGames();

const modal = document.getElementById("myModal");
const editNameInput = document.getElementById("edit-name");
const editDescriptionInput = document.getElementById("edit-description");
const editPriceInput = document.getElementById("edit-price");
const editTypeSelect = document.getElementById("edit-type");
const saveButton = document.getElementById("save_button");
let indexOfEditedGame = null;

function openEditModal(index) {
  indexOfEditedGame = index;
  const gameToEdit = games[index];

  editNameInput.value = gameToEdit.name;
  editDescriptionInput.value = gameToEdit.description;
  editPriceInput.value = gameToEdit.price;
  editTypeSelect.value = gameToEdit.type;

  modal.style.display = "block";
}

function saveEditedGame() {
  const editedGame = {
    name: editNameInput.value,
    description: editDescriptionInput.value,
    price: parseFloat(editPriceInput.value),
    type: editTypeSelect.value,
  };

  if (!editedGame.name || !editedGame.price || !editedGame.type) {
    alert("Please fill in all required fields.");
    return;
  }

  games[indexOfEditedGame] = editedGame;

  modal.style.display = "none";

  displayGames();
}

saveButton.addEventListener("click", saveEditedGame);

const closeModalButton = document.querySelector(".close");
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

const cancelButton = document.getElementById("cancel_button");
cancelButton.addEventListener("click", cancelEdit);

function cancelEdit() {
  editNameInput.value = "";
  editDescriptionInput.value = "";
  editPriceInput.value = "";
  editTypeSelect.value = "";
}
