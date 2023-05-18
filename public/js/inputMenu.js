import { fetchOpenAiApi, createPromptForNpcResponseToTradeRequest, createPromptForNpcResponseToChat } from './ai.js';


var userInventory = ['duct tape', 'rusty knife', 'hair gel']
var inventoryOfThisNpc = ['wrench', 'screws', 'shoelace']

const interactionModeQuestion = { type: "radio", text: "", choices: ["Barter", "Chat"], when: true }
const offerQuestion = { type: "radio", text: "Make an offer to trade your:", choices: [...userInventory], when: barter}
const receiveQuestion = { type: "radio", text: "To get in return:", choices: [...inventoryOfThisNpc], when: barter}
const chatQuestion = { type: "input", text: "Type to chat", when: chat }

var barter = false
var chat = false
var currentQuestionIndex = 0;
var dialogueList = []
var tradeRequestData = {}
var npcDataObject = {}
var chatInputValue;


var interactionContainer = document.getElementById('interactionContainer');
var userInputContainer = document.getElementById('userInputContainer');
var dialogueContainer = document.getElementById('dialogueContainer');
var dialogueUl = document.getElementById('dialogueUl');
var npcBioContainer = document.getElementById('npcBioContainer')
var npcNameEl = document.querySelector("#npcName")
var npcHeadshotContainer = document.querySelector("#npcHeadshotContainer")

function getRadioInputValue() {
    let radios = document.querySelectorAll('[name="choice"]');
    let selectedValue;

    radios.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    return selectedValue; // this will be the value of the selected radio button
}

function getTextInputValue() {
    let textInputValue = document.querySelector("#chatInput").value
    return textInputValue
}

function askEitherQuestionType(currentQuestion) {
    if (currentQuestion.type === "input") {
        renderTextQuestion(currentQuestion)
    } else if (currentQuestion.type === "radio") {
        renderCheckBoxQuestion(currentQuestion)
    }
}

function renderTextQuestion(currentQuestion) {
    clearUserInputContainer()
    let questionText = createQuestionText(currentQuestion)
    userInputContainer.appendChild(questionText);

    let input = document.createElement('input');
    input.type = "text";
    input.id = "chatInput"
    userInputContainer.appendChild(input);   
}

function renderCheckBoxQuestion(currentQuestion) {
    clearUserInputContainer()
    let questionText = createQuestionText(currentQuestion)
    userInputContainer.appendChild(questionText);

    currentQuestion.choices.forEach(choice => {
        let label = document.createElement('label');

        let radio = document.createElement('input');
        radio.type = "radio";
        radio.value = choice;
        radio.name = "choice"
        label.appendChild(radio);

        let choiceText = document.createTextNode(choice);
        label.appendChild(choiceText);

        userInputContainer.appendChild(label);
    });
}

function clearUserInputContainer() {
    userInputContainer.innerHTML = ''
}
function clearDialogueUl() {
    dialogueUl.innerHTML = ''
}
function clearChatInput() {
    var chatInput = document.querySelector("#chatInput")
    chatInput.value = ""
}

function createQuestionText(currentQuestion) {
    let questionText = document.createElement('p');
    questionText.innerText = currentQuestion.text;
    return questionText
}

function showInteractionContainer() {
    interactionContainer.style.display = 'flex';
}

function hideInteractionContainer() {
    interactionContainer.style.display = 'none';
}

function finishInteraction() {
    currentQuestionIndex = 0
    barter = false
    chat = false
    dialogueList = []
    tradeRequestData = {}
    npcDataObject = {}
    chatInputValue = ''
    clearDialogueUl()
    clearUserInputContainer()
    hideInteractionContainer()
}

function setInteractionModeFlag(interactionMode) {
    if (interactionMode == 'Barter') {
        barter = true
        console.log("setInteractionModeFlag barter___________", barter)
    } else if (interactionMode == 'Chat') {
        chat = true
        console.log("setInteractionModeFlag chat___________", chat)
    } else {
        console.log("Error in getting input value of first question")
    }
}

async function fetchNpcData(npcSearchableName) {
    try {
        const response = await fetch(`/api/gamedata/biography/${npcSearchableName}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const npcData = await response.json();
        return npcData;
    } catch (e) {
        console.log('There was a problem with your fetch operation: ' + e.message);
    }
}


function populateInteractionContainerWithNpcData(npcDataObject) {
    npcDataObject.searchable_name = 'placeholder' //!placeholder

    npcNameEl.innerHTML = npcDataObject.full_name
    npcHeadshotContainer.style.backgroundImage = `url('../images/characterHeadshots/${npcDataObject.searchable_name}.png')`
    npcBioContainer.innerHTML = `Bio:  ${npcDataObject.bio}`
}

// var nextBtn = document.getElementById('nextButton')
window.addEventListener('keydown', async function(e) {
    if (e.key === ' ' && currentQuestionIndex == 0) {
        if (interactionObject == 'spaceship') {
            //spaceship()
            return
        }
        npcDataObject = await fetchNpcData(interactionObject)
        populateInteractionContainerWithNpcData(npcDataObject)
        showInteractionContainer()
        askEitherQuestionType(interactionModeQuestion)
        currentQuestionIndex ++
    } else if (e.code === 'Enter' && currentQuestionIndex == 1) {
        var interactionModeInputValue = getRadioInputValue()
        if (!interactionModeInputValue) {
            console.log("Tried to press enter before any input option selected")
            return
        }
        setInteractionModeFlag(interactionModeInputValue)
        if (barter) {
            askEitherQuestionType(offerQuestion)
        } else if (chat) {
            askEitherQuestionType(chatQuestion)
        }
        currentQuestionIndex ++ 
    } else if (e.code === 'Enter' && chat && currentQuestionIndex >= 2) { 
        chatInputValue = getTextInputValue()
        if (chatInputValue=="") {
            console.log("Tried to press enter before any input option selected")
            return
        }
        dialogueList.push(`User: "${chatInputValue}"`)
        currentQuestionIndex ++
        processChatMessage(chatInputValue)
    } else if (e.code === 'Enter' && barter && currentQuestionIndex == 2) {
        tradeRequestData.itemOfferedByUser = getRadioInputValue()
        if (!tradeRequestData.itemOfferedByUser) {
            console.log("Tried to press enter before any input option selected")
            return
        }
        console.log("tradeRequestData.itemOfferedByUser________",tradeRequestData.itemOfferedByUser)
        askEitherQuestionType(receiveQuestion)
        currentQuestionIndex ++
    } else if (e.code === 'Enter' && barter && currentQuestionIndex == 3) {
        tradeRequestData.itemRequestedByUser = getRadioInputValue()
        if (!tradeRequestData.itemRequestedByUser) {
            console.log("Tried to press enter before any input option selected")
            return
        }
        currentQuestionIndex ++ 
        processTradeOffer()
    } else if (e.code === 'Escape' && currentQuestionIndex > 0) {
        finishInteraction()
    }
});


async function processChatMessage() {
    clearDialogueUl()
    clearChatInput()
    var reqObj = createChatPromptReqObj()
    var prompt = createPromptForNpcResponseToChat(reqObj)
    var promptResponse = await fetchOpenAiApi(prompt)
    var npcText = `NPC: ${promptResponse}`
    dialogueList.push(npcText)

    for (let line of dialogueList) {
        appendLiToDialogueBox(line)
    }
}

function formatDialogueListAsString() {
    var string = dialogueList.join("\n")
    return string
}

function createChatPromptReqObj() {
    var role = npcDataObject.role
    var bio = npcDataObject.bio
    var mostRecentMessage = chatInputValue
    var chatHistory = formatDialogueListAsString()

    var chatPromptReqObj = {
        role: role,
        bio: bio,
        mostRecentMessage: mostRecentMessage,
        chatHistory: chatHistory
    }
    return chatPromptReqObj
}

async function processTradeOffer() {
    //ToDo: fetchTradeOfferResponse(tradeRequestData)
    var prompt = createPromptForNpcResponseToTradeRequest()
    var promptResponse = await fetchOpenAiApi(prompt)
    var tradeSummary = `*User offers ${tradeRequestData.itemOfferedByUser} in exchange for ${tradeRequestData.itemRequestedByUser}.*`
    var dialogueText = `NPC: ${promptResponse}`
    appendLiToDialogueBox(tradeSummary)
    appendLiToDialogueBox(dialogueText)
    clearUserInputContainer()
    // appendTradeOfferSummaryToUserInputContainer:
}

function appendLiToDialogueBox(text) {
    var li = document.createElement("li")
    li.innerHTML = text
    dialogueUl.appendChild(li)
}

// function createReqBodyToCheckTrade (itemOfferedByUser, itemRequestedByUser) {
//     var tradeRequestData = {
//         "itemOfferedByUser": itemOfferedByUser,
//         "itemRequestedByUser": itemRequestedByUser
//     }
//     return reqBody
// }

async function fetchTradeOfferResponse(reqBody) {
    var responseToTradeOffer = await fetch('http://localhost:3001/api/trade/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            reqBody: reqBody
        }),
    })
    var promptResponse = await promptResponseNotJson.json();
    return promptResponse
}

