// main.js
import { addPlayer, removePlayer, displayPlayerList, players } from './playerManager.js';

const managePlayers = () => {
    console.log(addPlayer('Carlos')); // Carlos has been added to the list of players.
    console.log(addPlayer('Maria'));  // Maria has been added to the list of players.
    console.log(removePlayer('Carlos')); // Carlos has been removed from the list of players.
    console.log(displayPlayerList());  // Exibe a lista de jogadores
};

// Função principal para iniciar o gerenciamento
const start = () => {
    managePlayers();
};

// Inicia o programa
start();

