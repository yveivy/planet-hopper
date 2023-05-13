// const axios = require('axios');
const {XMLParser} = require("fast-xml-parser");
const axios = require("axios")


async function getOpenAiApiKey() {
    const response = await axios.get('http://localhost:3001/api/openai/key');
    const data = await response.data
    return data.openAiApiKey
}


async function callOpenAiApi(prompt) {
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

function createTaskPrompt() {
    var prompt = 
    ``
    return prompt
}


function createInitialPromptForOpenAIAPI(goal) {
    var prompt = 
    `Here is the project Goal: ${goal} 

    I want you to create a file structure for the project and describe what functionalities need to be within each file. Return the file structure within a set of <fileStructure> tags and the data for each file within a set of <file> tags. The following is an example of how your response should look: 
    """
    <fileStructure>
        "app.js",
        "config/config.js",
        "controllers/journalController.js",
        "controllers/userController.js",
        "models/journal.js",
        "models/user.js",
        "services/twilioService.js",
        "services/googleDocsService.js",
        "utils/scheduler.js",
        "views/settings.ejs",
        "routes/journalRoutes.js",
        "routes/userRoutes.js"
    </fileStructure>
    <fileDetails>
        <filePath>app.js</filePath> 
        <description> The entry point of the application, responsible for setting up the server, initializing routes, and starting the scheduler.</description>
        <filePath>config/config.js</filePath> 
        <description> Contains the configuration settings for the application, including API keys and environment variables.</description>
        <filePath>controllers/journalController.js</filePath> 
        <description> Handles the main functionality related to the journal, such as sending the journal prompts and processing the responses from users.</description>
        <filePath>controllers/userController.js</filePath>
        <description> Manages user-related actions, including creating and updating user settings.</description>
    </fileDetails>
    """`
    return prompt
}

function getFileStructure(inputString) {
    let fileStructure = inputString.split('<fileStructure>')[1].split('</fileStructure>')[0].trim();
    return fileStructure;
}

function parseInitialResponse(initialResponse) {
    const parser = new XMLParser();
    let projectObj = parser.parse(initialResponse);
    console.log(projectObj)
    return projectObj
}

async function init() {
    var promptResponse = await callOpenAiApi("test")
}
init()

module.exports = {
    callOpenAiApi,
    getOpenAiApiKey
}