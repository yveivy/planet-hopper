const express = require("express")
const router = require('express').Router();

router.get('/key', async (req, res) => {
    const apiKey = await process.env.OPENAI_API_KEY;
    if (apiKey) {
        res.json({ openAiApiKey: apiKey });
    } else {
        res.status(404).send('API key not found');
    }
});

module.exports = router