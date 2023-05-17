const express = require('express');
const router = express.Router();
const { Characters, Items, Inventory, Wishlist } = require('../models');

router.put('/exchange-items/:fromCharacterId/:toCharacterId/:fromItemName/:toItemName', async (req, res) => {
    try {
        const { fromCharacterId, toCharacterId, fromItemName, toItemName } = req.params;

        await Promise.all([
            Inventory.update(
                {character_id: toCharacterId, item_name: toItemName },
                {where: { character_id: fromCharacterId, item_name: fromItemName}}
            ),
            Inventory.update(
                {character_id: toCharacterId, item_name: toItemName },
                {where: { character_id: fromCharacterId, item_name: fromItemName}}
            ),

        ]);

        return res.status(200).json({ message: 'Items exchanged successfully'});
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error'});
    }
});

module.exports = router;