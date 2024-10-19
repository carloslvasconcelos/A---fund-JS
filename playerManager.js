// players.js

// Array para armazenar a lista de jogadores
let players = []; 
const MAX_PLAYERS = 11; // Constante para o número máximo de jogadores

// Função para adicionar jogadores à lista
const addPlayer = (name) => {
    if (!name) {
        return "Invalid name. Please enter a valid name.";
    } else if (players.includes(name)) {
        return "This player is already on the list.";
    } else if (players.length < MAX_PLAYERS) {
        players.push(name);
        return `${name} has been added to the list of players.`;
    } else {
        return "The list is already full! It is not possible to add more players.";
    }
};

// Função para remover um jogador pelo nome
const removePlayer = (name) => {
    const index = players.indexOf(name);
    if (index !== -1) {
        players.splice(index, 1);
        return `${name} has been removed from the list of players.`;
    } else {
        return `${name} is not on the list.`;
    }
};

// Função para exibir a lista de jogadores
const displayPlayerList = () => {
    return players.length === 0 ? "No players in the list." : players.map((player, index) => `Player ${index + 1}: ${player}`).join("\n");
};

// Exportando as funções
module.exports = {
    addPlayer,
    removePlayer,
    displayPlayerList
};
