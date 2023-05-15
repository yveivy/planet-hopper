var barter = false
var chat = false
var currentQuestionIndex = 0;
var answers = {};
var inputValue;

var interactionContainer = document.getElementById('interactionContainer');
var userInputContainer = document.getElementById('userInputContainer');
var dialogueContainer = document.getElementById('dialogueContainer');


var userInventory = ['duct tape', 'rusty knife', 'hair gel']
var inventoryOfThisNpc = ['wrench', 'screws', 'shoelace']

const interactionModeQuestion = { type: "radio", text: "", choices: ["Barter", "Chat"], when: true }
const offerQuestion = { type: "radio", text: "Make an offer to trade your:", choices: [...userInventory], when: barter}
const receiveQuestion = { type: "radio", text: "To get in return:", choices: [...inventoryOfThisNpc], when: barter}
const chatQuestion = { type: "input", text: "Type to chat", when: chat }


function getInputValue() {
    let radios = document.querySelectorAll('[name="choice"]');
    let selectedValue;

    radios.forEach(radio => {
        if (radio.checked) {
            selectedValue = radio.value;
        }
    });

    return selectedValue; // this will be the value of the selected radio button
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
    console.log("renderCheckBoxQuestion_______")
}

function clearUserInputContainer() {
    userInputContainer.innerHTML = ''
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

// var nextBtn = document.getElementById('nextButton')
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' && currentQuestionIndex == 0) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        showInteractionContainer()
        askEitherQuestionType(interactionModeQuestion)
        currentQuestionIndex ++
    } else if (e.code === 'Enter' && currentQuestionIndex == 1) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        currentQuestionIndex += 1 
        var interactionModeInputValue = getInputValue()
        setInteractionModeFlag(interactionModeInputValue)
        if (barter) {
            askEitherQuestionType(offerQuestion)
        } else if (chat) {
            askEitherQuestionType(chatQuestion)
        }
    } else if (e.code === 'Enter' && chat && currentQuestionIndex == 2) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        console.log("event listener for input sequence: chat______________", chat)
        currentQuestionIndex += 1 
        var chatInputValue = getInputValue()
        finishInteraction()
    } else if (e.code === 'Enter' && barter && currentQuestionIndex == 2) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        currentQuestionIndex += 1 
        var offerInputValue = getInputValue()
        askEitherQuestionType(receiveQuestion)
    } else if (e.code === 'Enter' && barter && currentQuestionIndex == 3) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        currentQuestionIndex += 1 
        var receiveInputValue = getInputValue()
        finishInteraction()
    } else if (e.code === 'Escape' && currentQuestionIndex > 0) {
        console.log("keydown 1_____________currentQuestionIndex:", currentQuestionIndex)
        finishInteraction()
    }
});