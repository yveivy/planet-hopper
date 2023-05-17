const express = require('express');
const router = express.Router();
const { Characters, Items, Inventory, Wishlist } = require('../../models');

router.get('/test', (req, res) => {
    res.send('Test get route is working');
});

router.put('/test', (req, res) => {
    res.send('Test put route is working')
})

router.put('/trade/:fromCharacterId/:toCharacterId/:fromItemId/:toItemId', async (req, res) => {
    try {
        const { fromCharacterId, toCharacterId, fromItemId, toItemId } = req.params;

        await Promise.all([
            Inventory.update(
                {character_id: toCharacterId, item_id: toItemId },
                {where: { character_id: fromCharacterId, item_id: fromItemId}}
            ),
            Inventory.update(
                {character_id: fromCharacterId, item_id: fromItemId },
                {where: { character_id: toCharacterId, item_id: toItemId}}
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
                    attributes: ['character_name']
                },

                { model: Items, 
                    attributes: ['item_name'] 
            
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
router.get('/character-inventory/:characterId', async (req, res) => {
    try {
        const { characterId } = req.params;

        const inventory = await Inventory.findAll({
            where: { character_id:  characterId },
            include: [
                {
                 model: Characters,
                    attributes: ['character_name']
                },
               
                { model: Items, 
                    attributes: ['item_name']},
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error'});
    }
}); 

router.get('/biography/:characterName', async (req, res) => {
    console.log("get biography________________________")
    try {
        const characterName = req.params.characterName
        console.log("characterName___________",characterName)

        const biography = await Characters.findOne({
            where: {
              character_name: characterName
            }
        })

        return res.status(200).json(biography);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;