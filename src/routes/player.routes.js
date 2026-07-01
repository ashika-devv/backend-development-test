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

module.exports = router;