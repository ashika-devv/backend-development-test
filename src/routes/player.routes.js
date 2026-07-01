const express = require("express");
const router = express.Router();

const playerService = require("../services/player.service");

router.get("/balance/:playerId", async (req, res) => {
    try {
        const { playerId } = req.params;

        const player = await playerService.getPlayer(playerId);

        if (!player) {
            return res.status(404).json({
                message: "Player not found"
            });
        }

        return res.status(200).json({
            player: player.id,
            balance: player.balance
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
router.get("/random", (req, res) => {
    const { min, max } = req.query;
    if (min === undefined || max === undefined) {
    return res.status(400).json({
        message: "Both min and max are required"
    });
}
    const minValue = Number(min);
    const maxValue = Number(max);

    if (isNaN(minValue) || isNaN(maxValue)) {
        return res.status(400).json({
            message: "Invalid min or max value"
        });
    }

    if (minValue > maxValue) {
        return res.status(400).json({
            message: "min cannot be greater than max"
        });
    }

    const number = playerService.generateRandom(minValue, maxValue);

    return res.status(200).json({
        number
    });
});
router.post("/spin/:playerId", async (req, res) => {
    try {
        const { playerId } = req.params;

        const player = await playerService.getPlayer(playerId);

        if (!player) {
            return res.status(404).json({
                message: "Player not found"
            });
        }

        const randomNumber = playerService.generateRandom(1, 10);

        const updatedPlayer = await playerService.updatePlayerBalance(
            playerId,
            randomNumber
        );

        return res.status(200).json({
            player: updatedPlayer.id,
            random: randomNumber,
            balance: updatedPlayer.balance
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
});
module.exports = router;