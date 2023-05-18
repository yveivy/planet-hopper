// const { Inventory, Characters, Items } = require('../models');


async function makeTrade(fromItemName, toItemName) {
    try {
        const mainCharacterId = 1; //this is a place holder id for the main character, it will have to update after the database is seeded.
        const response = await fetch(`/exchange-items/1/${fromItemName}/${toItemName}`, { //will have to swap out the 1 with either the main characters id or the variable we set the main characters id too.
            method: 'PUT',
        });

        if (response.ok) {
            console.log('Items exchanged successfully');
        } else {
            console.error('Exchange items request failed');
        }
    } catch (error) {
        console.error('An error occurred during the exchange items request:', error);
    }
}

async function showMainCharacterInventory() {
    try {
        const mainCharacterId = 1;//place holder for main character id from the database
        const response = await fetch(`/inventory/${mainCharacterId}`) // don't need the template literal here but Im not 100% sure on the syntax
        const inventory = await response.json();

        console.log('Response:', response);
        console.log('Inventory:', inventory);

        console.log('Main Character Inventory:')
        inventory.forEach(item => {
            console.log(`- ${item.item_name}`);//instead of logging on the console, this needs to display in a container during game play. Should be a button where 
        });
    } catch (error) {
        console.error('An error occurred while retrieving the main character inventory:', error);
    }
}

// showMainCharacterInventory();

// actually do not think we need the below function but it is there if we decide to incorporate it in gameplay.
async function showCharacterInventory(characterId) {
    try {
        const response = await fetch(`/inventory/${characterId}`);
        const inventory = await response.json();

        console.log(`Character ${characterId} Inventory:`);
        inventory.forEach(item => {
            console.log(` - ${item.item_name}`);
        });

    } catch (error) {
        console.error(`An error occurred while retrieving the inventory of character ${characterId}:`, error);
    }
}

async function selectTradeItems(characterId, containerId) { //need id of container from HTML
    try {
        const response = await fetch(`/inventory/${characterId}`);
        const inventory = await response.json();

        const dropdown = document.createElement('select');
        dropdown.addEventListener('change', (event) => {
            const selectedItemId = event.target.value;
            makeTrade(containerId === 'main-character-container' ? selectedItemId : toItemName, containerId === 'other-character-container' ? selectedItemId : fromItemName);
        });

        inventory.forEach(item => {
            const option = document.createElement('option');
            option.value = item.item_id;
            option.textContent = item.item_name;
            dropdown.appendChild(option);
        });

        const container = document.getElementById(containerId); //need id of container from HTML
        container.innerHTML = '';
        container.appendChild(dropdown);
    } catch (error) {
        console.error(`An error occurred while retrieving the inventory of character ${characterId}:`, error);
    }

}

async function showTradeItems(mainCharacterId, otherCharacterId) {
    try {
        const mainCharacterResponse = await fetch(`/inventory/${mainCharacterId}`);
        const mainCharacterInventory = await mainCharacterResponse.json();

        const otherCharacterResponse = await fetch(`/inventory/${otherCharacterId}`);
        const otherCharacterInventory = await otherCharacterResponse.json();

        console.log('Main Character Inventory:');
        selectTradeItems(mainCharacterId, 'main-character-container') //HTML main character container id (need to make a div ,<div id="main-character-container"></div>)
        mainCharacterInventory.forEach(item => {
            console.log(` - ${item.item_name}`);
        });

        console.log(`Other Character ${otherCharacterId} Inventory:`); 
        selectTradeItems(otherCharacterId, 'other-character-container'); //HTML character container id (need to make a div ,<div id="other-character-container"></div>)
        otherCharacterInventory.forEach(item => {
            console.log(` - ${item.item_name}`);
        });
    } catch (error) {
        console.error('An error occurred while retrieving the inventories for trade:', error);
    }
};

// showCharacterInventory();

const getInventoryItems = async () => {
  try {
    const inventoryItems = await Inventory.findAll({
      include: [
        { model: Characters, attributes: ['character_name'] },
        { model: Items, attributes: ['item_name'] },
      ],
    });
    console.log(inventoryItems);
  } catch (error) {
    console.error('Error retrieving inventory items:', error);
  }
};

getInventoryItems();