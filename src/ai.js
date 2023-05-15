// const axios = require('axios');
const axios = require("axios")


export async function getOpenAiApiKey() {
    const response = await axios.get('http://localhost:3001/api/openai/key');
    const data = await response.data
    return data.openAiApiKey
}


export async function callOpenAiApi(prompt) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const data = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.4,
        max_tokens: 2000,
    };
    const openAiApiKey = await getOpenAiApiKey();

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAiApiKey}`,
            },
        });
        const promptResponse = response.data.choices[0].message.content;
        console.log("callOpenAiApi()____________", promptResponse)
        return promptResponse;
    } 
    catch (error) {
        console.error('Error:', error);
    }
}

export function createPromptForNpcResponseToTradeRequest() {
    var bio = "You are a 3rd generation farmer and a really gruff woman"
    var valuedItems = "tools"
    var nonValuedItems = "art"
    var itemNeededAndReasonWhy = "some duct tape to fix your shovel"
    var inventory = "an art piece, a rake, and a broken shovel."
    var userInventory = "duct tape, spaceship oil, and a rattlesnake skin."
    var itemOfferedByUser = "rattlesnake skin"
    var itemRequestedByUser = "art piece"
    var offerDecision = "decline"

var prompt = 
`You are an npc in a scifi themed bartering RPG called planet hopper. User has crash landed on your planet, and he is trying to trade with you and other NPCs to eventually get the items he needs to get off the planet. The different NPCs value items differently depending on their personal preferences. Their personal preferences regarding various items will alter their willingness to accept the user's offers to trade.
Here's a little information about you:
Bio- ${bio}.
Item attitudes- You really value ${valuedItems}. You don't value ${nonValuedItems} very much. You need ${itemNeededAndReasonWhy}.
Inventory: You have ${inventory}
The user has ${userInventory}

The user offered to trade his ${itemOfferedByUser} for your ${itemRequestedByUser}, and you ${offerDecision}.
Give me your verbal response in quotes to his offer. Don't respond with anything outside the quotes, or it will mess up the program
`
    return prompt
}


export function createPromptForNpcResponseToChat() {
    var bio = "You are a 3rd generation farmer and a really gruff woman"
    var chatMessage = "Do you like living on this planet?"
var chatHistory =
``

var prompt = 
`You are an npc in a scifi themed bartering RPG called planet hopper. User has crash landed on your planet, and he is trying to trade with you and other NPCs to eventually get the items he needs to get off the planet. In the meantime, He is chatting you up.
Here's a little information about you:
Bio- ${bio}.
Inventory: You have ${inventory}
The user has ${userInventory}

${chatHistory}
User: ${chatMessage}

Give me your verbal response in quotes to what he just said. Don't respond with anything outside the quotes, or it will mess up the program
`
}


export async function init() {
    var npcResponseToChat = await callOpenAiApi(createPromptForNpcResponseToChat())
    console.log("npcResponseToChat___________", npcResponseToChat)

    var npcResponseToTradeRequest = await callOpenAiApi(createPromptForNpcResponseToTradeRequest())
    console.log("npcResponseToTradeRequest___________", npcResponseToTradeRequest)

}
init()