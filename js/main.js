let games = [];

function addGame() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const type = document.getElementById("type").value;

  if (!name || !price || !type) {
    alert("Please fill in all required fields.");
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

  games.forEach((game) => {
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
    editButton.addEventListener("click", () => {});

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
  games.sort((a, b) => b.price - a.price);
  displayGames();
}

function calculateTotalPrice() {
  const totalPriceElement = document.getElementById("totalPrice");

  const totalPrice = games.reduce((total, game) => total + game.price, 0);

  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
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
    searchResults.forEach((game) => {
      const gameDiv = document.createElement("div");
      gameDiv.classList.add("game-item");

      const gameInfo = `
        <h3>${game.name}</h3>
        <p>Description: ${game.description}</p>
        <p>Price: $${game.price.toFixed(2)}</p>
        <p>Type: ${game.type}</p>
      `;

      gameDiv.innerHTML = gameInfo;
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
