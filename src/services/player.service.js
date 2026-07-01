const fs = require("fs").promises;
const path = require("path");

const playersFile = path.join(__dirname, "../data/players.json");

async function getPlayer(playerId) {
    const data = await fs.readFile(playersFile, "utf-8");

    const players = JSON.parse(data);

    return players.find(player => player.id === playerId);
}

module.exports = {
    getPlayer
};