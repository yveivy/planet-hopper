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


//this restricts trade for the specified game items that meet the games objective and doesn't allow trade of other items.
router.put('/trade/:item1/:item2', async (req, res) => {
    try {
        const { item1, item2 } = req.params;

        if (
            (item1 === '10' && (item2 === '1' || item2 === '12')) 
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });

            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: 'accept' });
        } 

        if (
            (item1 === '12' && (item2 === '10' || item2 === '8')) 
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });

            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: 'accept' });
        }

        if (
            (item1 === '8' && item2 === '12') 
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });

            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: "accept" });
        }

        if (
            (item1 === '13' && item2 === '8')
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });


            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: "accept" });
        }

        if (
            (item1 === '6' && item2 === '3')
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });

            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: "accept" });
        } 

        if (
            (item1 === '15' && item2 === '13')  
        ) {
            // Save original items first
            const originalItem1 = await Inventory.findOne({ where: { item_id: item1 } });
            const originalItem2 = await Inventory.findOne({ where: { item_id: item2 } });

            // Swap the items
            await originalItem1.update({ item_id: item2 });
            await originalItem2.update({ item_id: item1 });

            return res.status(200).json({ offerDecision: "accept" });
        } 
        // No valid trade condition matched, so no trade is allowed
        return res.status(200).json({ offerDecision: "decline" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


// pulls up the inventory for each character by character name
router.get('/inventory/:character', async (req, res) => {
    try {
        const { character } = req.params;

        const inventory = await Inventory.findAll({
            attributes: { exclude: ['id', 'character_id', 'item_id'] },
            include: [
                {
                    model: Characters,
                    where: { searchable_name: character },
                    attributes: { exclude: ['character_id', 'searchable_name', 'full_name', 'role', 'bio'] }
                },

                {
                    model: Items,
                    attributes: { exclude: ['searchable_item'] }

                },
            ],
        });

        return res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


//Complete list of characters and their current inventories
router.get('/inventory', async (req, res) => {
    try {

        const inventory = await Inventory.findAll({
            attributes: { exclude: ['id', 'character_id', 'item_id'] },
            include: [
                {
                    model: Characters,
                    attributes: { exclude: ['character_id', 'searchable_name', 'role', 'bio'] }
                },

                {
                    model: Items,
                    attributes: { exclude: ['item_id', 'searchable_item'] }

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
            attributes: { exclude: ['character_id', 'searchable_name'] },
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
router.get('/item/:searchableItem', async (req, res) => {
    console.log("get item________________________")
    try {
        const searchableItem = req.params.searchableItem
        console.log("searchableItem___________", searchableItem)

        const data = await Items.findOne({
            attributes: { exclude: ['item_id', 'searchable_item'] },
            where: {
                searchable_item: searchableItem
            }
        })
        console.log('data___________', data.dataValues)

        return res.status(200).json(data.dataValues);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// get a list of all items and their descriptions
router.get('/items', async (req, res) => {
    console.log("get items________________________")
    try {
        const items = await Items.findAll({
            attributes: { exclude: ['item_id', 'searchable_item'] },
            


        });

        return res.status(200).json(items);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;