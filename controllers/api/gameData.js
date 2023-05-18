const express = require('express');
const router = express.Router();
const { sequelize } = require('../../config/connection');

console.log(sequelize);
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

        // Save original items first
        const originalFromItem = await Inventory.findOne({ where: { character_id: fromCharacterId, item_id: fromItemId } });
        const originalToItem = await Inventory.findOne({ where: { character_id: toCharacterId, item_id: toItemId } });

        if (!originalFromItem || !originalToItem) {
            return res.status(404).json({ message: 'One or both of the items do not exist' });
        }

        // Update the items
        await originalFromItem.update({ character_id: toCharacterId });
        await originalToItem.update({ character_id: fromCharacterId });

        return res.status(200).json({ message: 'Items exchanged successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


// router.put('/trade/:fromCharacterId/:fromItemId/:toCharacterId/:toItemId', async (req, res) => {
//     try {
//         const { fromCharacterId, fromItemId, toCharacterId, toItemId } = req.params;

//         // Save original items first
//         const originalFromItem = await Inventory.findOne({ where: { character_id: fromCharacterId, item_id: fromItemId } });
//         const originalToItem = await Inventory.findOne({ where: { character_id: toCharacterId, item_id: toItemId } });

//         if (!originalFromItem || !originalToItem) {
//             return res.status(404).json({ message: 'One or both of the items do not exist' });
//         }

//         // Update the items
//         await Promise.all([
//             Inventory.update(
//                 { character_id: toCharacterId, item_id: toItemId },
//                 { where: { character_id: fromCharacterId, item_id: fromItemId } }
//             ),
//             Inventory.update(
//                 { character_id: fromCharacterId, item_id: fromItemId },
//                 { where: { character_id: toCharacterId, item_id: toItemId } }
//             ),
//         ]);

//         return res.status(200).json({ message: 'Items exchanged successfully' });

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });

// router.put('/trade/:fromCharacterId/:fromItemId/:toCharacterId/:toItemId', async (req, res) => {
//     const transaction = await sequelize.transaction();
//     try {
//         const { fromCharacterId, fromItemId, toCharacterId, toItemId } = req.params;

//         await Inventory.update(
//             { character_id: toCharacterId, item_id: toItemId },
//             { where: { character_id: fromCharacterId, item_id: fromItemId } }, { transaction }
//         ),

//         await Inventory.update(
//              { character_id: fromCharacterId, item_id: fromItemId },
//              { where: { character_id: toCharacterId, item_id: toItemId } }
//          );


//         await transaction.commit();



//         return res.status(200).json({ message: 'Items exchanged successfully' });

//         } catch (error) {

//         await transaction.rollback();
//         console.error(error);
//         return res.status(500).json({ error: 'Internal server error' });
//         }
//     }); 


//GET route for retrieving the main character's inventory
// router.get('/inventory/character_name', async (req, res) => {
//     try {
//         const { mainCharacterId } = req.params;

//         const inventory = await Inventory.findAll({
//             where: { character_id: mainCharacterId },
//             include: [
//                 {
//                     model: Characters,
//                     attributes: ['character_name']
//                 },

//                 {
//                     model: Items,
//                     attributes: ['item_name','description']

//                 },
//             ],
//         });

//         return res.status(200).json(inventory);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });

//GET route for retrieving a character's inventory
router.get('/inventory/:character', async (req, res) => {
    try {
        const {character} = req.params;

        const inventory = await Inventory.findAll({
            attributes: {exclude: ['id','character_id','item_id']},
            include: [
                {
                    model: Characters,
                    where: { searchable_name: character },
                    attributes: { exclude: ['character_id', 'searchable_name', 'full_name', 'role', 'bio']}
                },

                {
                    model: Items,
                    attributes: {exclude: ['item_id',]} 
                  
                },
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
//get biography by character name
router.get('/biography/:searchableName', async (req, res) => {
    console.log("get biography________________________")
    try {
        const searchableName = req.params.searchableName
        console.log("searchableName___________", searchableName)

        const data = await Characters.findOne({
            attributes: {exclude: ['character_id','searchable_name']},
            where: {
                searchable_name: searchableName
            }
        })
        console.log('data___________', data.dataValues)

        return res.status(200).json(data.dataValues);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
//get item name and description by item name
router.get('/item/:searchableName', async (req, res) => {
    console.log("get item________________________")
    try {
        const searchableName = req.params.searchableName
        console.log("searchableName___________", searchableName)

        const data = await Items.findOne({
            where: {
                searchable_name: searchableName
            }
        })
        console.log('data___________', data.dataValues)

        return res.status(200).json(data.dataValues);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/items', async (req, res) => {
    console.log("get items________________________")
    try {
        const items = await Items.findAll();
        console.log("items___________", items)

        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});




module.exports = router;