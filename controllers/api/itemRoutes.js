const express = require('express');
const router = express.Router();
const { Characters, Items, Inventory, Wishlist } = require('../../models');

router.put('/trade/:fromCharacterId/:toCharacterId/:fromItemName/:toItemName', async (req, res) => {
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

//GET route for retrieving the main character's inventory
router.get('/inventory/:mainCharacterId', async (req, res) => {
    try {
        const { mainCharacterId } = req.params;

        const inventory = await Inventory.findAll({
            where: { character_id: mainCharacterId },
            include: [
                {
                    model: Characters,
                    attributes: [ 'character_id', 'character_name']
                },

                { model: Items, attributes: ['item_id', 'item_name'] 
            
                },
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//GET route for retrieving a character's inventory
router.get('/inventory/:characterId', async (req, res) => {
    try {
        const { characterId } = req.params;

        const inventory = await Inventory.findAll({
            where: { character_id:  characterId },
            include: [
               
               
                { model: Items, attributes: ['item_id', 'item_name']},
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error'});
    }
}); 


module.exports = router;