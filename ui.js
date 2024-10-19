// List of players
let players = []; // Array to store the list of players
const MAX_PLAYERS = 11; // Constant for the maximum number of players

// Function to add players to the list using switch
const addPlayer = (name) => {
    switch (true) {
        case (!name):
            console.log("Invalid name. Please enter a valid name.");
            break;
        case (players.includes(name)):
            console.log("This player is already on the list.");
            break;
        case (players.length < MAX_PLAYERS):
            players.push(name);
            console.log(`${name} has been added to the list of players.`);
            break;
        default:
            console.log("The list is already full! It is not possible to add more players.");
    }
};

// Function to remove a player by name
const removePlayer = (name) => {
    const index = players.indexOf(name);
    if (index !== -1) {
        players.splice(index, 1);
        console.log(`${name} has been removed from the list of players.`);
    } else {
        console.log(`${name} is not on the list.`);
    }
};

// Function to display the list of players
const displayPlayerList = () => {
    console.log("Final list of players who want to play soccer:");
    players.forEach((player, index) => {
        console.log(`Player ${index + 1}: ${player}`);
    });
};

// Function to manage player input
const managePlayers = () => {
    let continueManaging = true;

    while (continueManaging) {
        let action = prompt("Do you want to add or remove a player? (add/remove):").toLowerCase();

        switch (action) {
            case 'add':
                let nameToAdd = prompt("Enter the name of the person who wants to play soccer:");
                addPlayer(nameToAdd);
                break;
            case 'remove':
                let nameToRemove = prompt("Enter the name of the player you want to remove:");
                removePlayer(nameToRemove);
                break;
            default:
                console.log("Invalid action. Please choose either 'add' or 'remove'.");
        }

        let response = prompt("Do you want to continue managing players? (y/n)");
        continueManaging = response.toLowerCase() === 'y';
    }

    displayPlayerList();
};

// Main function to start player management
const start = () => {
    managePlayers();
};

// Start the program
start();
