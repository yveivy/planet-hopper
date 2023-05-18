export async function fetchOpenAiApi(prompt) {
    var promptResponseNotJson = await fetch('http://localhost:3001/api/openai/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: prompt,
        }),
    })
    var promptResponse = await promptResponseNotJson.json();
    return promptResponse
}


export function createPromptForNpcResponseToTradeRequest(reqObj) {
    var bio = "You are a 3rd generation farmer and a really gruff woman"
    var role = "farmer"
    var valuedItems = "tools"
    var nonValuedItems = "art"
    var itemNeededAndReasonWhy = "some duct tape to fix your shovel"
    var inventory = "an art piece, a rake, and a broken shovel."
    var userInventory = "duct tape, spaceship oil, and a rattlesnake skin."
    var itemOfferedByUser = "rattlesnake skin"
    var itemRequestedByUser = "art piece"
    var offerDecision = "decline"

var prompt = 
`You are an npc in a scifi themed trading-oriented RPG called planet hopper. User has crash landed on your planet, and he is trying to trade with you and other NPCs to eventually get the items he needs to get off the planet. The different NPCs value items differently depending on their personal preferences. Their personal preferences regarding various items will alter their willingness to accept the user's offers to trade.
Here's a little information about you:
Role-${role}
Bio- ${bio}.
Inventory: You have ${inventory}
The user has ${userInventory}

The user offered to trade his ${itemOfferedByUser} for your ${itemRequestedByUser}, and you ${offerDecision}.
Give me your verbal response in quotes to his offer. Don't respond with anything outside the quotes, or it will mess up the program
`
    return prompt
}


export function createPromptForNpcResponseToChat(reqObj) {
    var role = reqObj.role
    var bio = reqObj.bio
    var chatHistory = reqObj.chatHistory

var prompt = 
`You are an npc in a scifi themed trading-oriented RPG called planet hopper. User has crash landed on your planet, and he is trying to trade with you and other NPCs to eventually get the items he needs to get off the planet. In the meantime, He is chatting you up.
Here's a little information about you:
Role-${role}
Bio- ${bio}

${chatHistory}

Give me your verbal response in quotes to what user just said. Don't respond with anything outside the quotes, or it will mess up the program`

console.log("createPromptForNpcResponseToChat_______________", prompt)
return prompt
}
