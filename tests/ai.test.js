const { callOpenAiApi, fetchOpenAiApiKey} = require('../services/ai');


test('fetchOpenApiKey returns a string', async () => {
    const result = await fetchOpenAiApiKey();
    console.log("openAiApiKey________",result)
    expect(typeof result).toBe('string');
});

test('callOpenAiApi returns a string', async () => {
    const result = await callOpenAiApi('test');
    expect(typeof result).toBe('string');
});


