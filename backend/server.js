const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const categories = ['age', 'attitude', 'change', 'courage', 'death', 'dreams', 'equality', 'experience', 'failure', 'faith', 'fear', 'fitness', 'forgiveness', 'freedom', 'friendship', 'happiness', 'health', 'hope', 'imagination', 'leadership', 'love', 'life', 'money', 'success'];

app.get('/api/quote', async (req, res) => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
            // mode: 'use-cors',
            headers: { 'X-Api-Key': process.env.API_KEY }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const quote = data[0];
        res.json({ ...quote, category: randomCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/wordOfTheDay', async (req, res) => {
    const apiKey = process.env.WORDNIK_API_KEY;
    const apiUrl = `http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching word of the day' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});