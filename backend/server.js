const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();
const cors = require('cors');
app.use(cors());

app.use(express.json());

const categories = ['age', 'alone', 'attitude', 'change', 'courage', 'death', 'dreams', 'equality', 'experience', 'failure', 'faith', 'fear', 'fitness', 'forgiveness', 'freedom', 'friendship', 'happiness', 'health', 'hope', 'imagination', 'leadership', 'love', 'life', 'money', 'success'];

app.get('/api/quote', async (req, res) => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});