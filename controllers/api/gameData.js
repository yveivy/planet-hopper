const express = require('express');
const router = express.Router();
const { Characters, Items, Inventory, Wishlist } = require('../../models');

router.get('/test', (req, res) => {
    res.send('Test get route is working');
});

router.put('/test', (req, res) => {
    res.send('Test put route is working')
})

router.put('/trade/:fromCharacterId/:fromItemId/:toCharacterId/:toItemId', async (req, res) => {
    try {
        const { fromCharacterId, fromItemId, toCharacterId, toItemId } = req.params;

        await Promise.all([
            Inventory.update(
                { character_id: toCharacterId, item_id: toItemId },
                { where: { character_id: fromCharacterId, item_id: fromItemId } }
            ),
            Inventory.update(
                { character_id: fromCharacterId, item_id: fromItemId },
                { where: { character_id: toCharacterId, item_id: toItemId } }
            ),

        ]);

        return res.status(200).json({ message: 'Items exchanged successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//GET route for retrieving the main character's inventory
router.get('/inventory/character_name', async (req, res) => {
    try {
        const { mainCharacterId } = req.params;

        const inventory = await Inventory.findAll({
            where: { character_id: mainCharacterId },
            include: [
                {
                    model: Characters,
                    attributes: ['character_name']
                },

                {
                    model: Items,
                    attributes: ['item_name','description']

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
router.get('/character-inventory/:characterItems', async (req, res) => {
    try {
        const { characterItems } = req.params;

        const inventory = await Inventory.findAll({
            where: { character_id: characterItems },
            include: [
                {
                    model: Characters,
                    attributes: ['character_name']
                },

                {
                    model: Items,
                    attributes: ['item_name', 'description']
                },
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

<<<<<<< HEAD:controllers/api/itemRoutes.js

router.get('/biography/:characterName', async (req, res) => {
    try {
        const { characterName } = req.params;

        const biography = await Characters.findOne({
            where: { character_name: characterName },

        });
=======
router.get('/biography/:searchableName', async (req, res) => {
    console.log("get biography________________________")
    try {
        const searchableName = req.params.searchableName
        console.log("searchableName___________",searchableName)

        const data = await Characters.findOne({
            where: {
              searchable_name: searchableName
            }
        })
        console.log('data___________',data.dataValues)
>>>>>>> b72503926b6130be00d42312598513fd49bbf6d1:controllers/api/gameData.js

        return res.status(200).json(data.dataValues);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/inventory/itemName', async (req, res) => {
    try {
        const { itemName } = req.params;

        const inventory = await Inventory.findAll({
            where: { item_name: itemName },
            include: [

                {
                    model: Items,
                    attributes: ['item_name','description']

                },
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;