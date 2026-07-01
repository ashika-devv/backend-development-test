const fs = require("fs").promises;
const path = require("path");

const playersFile = path.join(__dirname, "../data/players.json");

async function getPlayer(playerId) {
    const data = await fs.readFile(playersFile, "utf-8");

    const players = JSON.parse(data);

    return players.find(player => player.id === playerId);
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function updatePlayerBalance(playerId, amount) {
    const data = await fs.readFile(playersFile, "utf-8");

    const players = JSON.parse(data);

    const player = players.find(player => player.id === playerId);

    if (!player) {
        return null;
    }

    player.balance += amount;

    await fs.writeFile(
        playersFile,
        JSON.stringify(players, null, 2)
    );

    return player;
}

module.exports = {
    getPlayer,
    generateRandom,
    updatePlayerBalance
};