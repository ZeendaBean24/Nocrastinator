const express = require('express');
const fetch = require('node-fetch');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

app.use(express.json());

const categories = ['age', 'attitude', 'change', 'courage', 'death', 'dreams', 'equality', 'experience', 'failure', 'faith', 'fear', 'fitness', 'forgiveness', 'freedom', 'friendship', 'happiness', 'health', 'hope', 'imagination', 'leadership', 'love', 'life', 'money', 'success'];

// app.get('/api/quote', async (req, res) => {
//     const randomCategory = categories[Math.floor(Math.random() * categories.length)];
//     try {
//         const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
//             // mode: 'use-cors',
//             headers: { 'X-Api-Key': process.env.API_KEY }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         const quote = data[0];
//         res.json({ ...quote, category: randomCategory });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

app.get('/wordOfTheDay', async (req, res) => {
    const apiKey = process.env.WORDNIK_API_KEY;
    const wordOfTheDayUrl = `http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${apiKey}`;

    try {
        const wordResponse = await fetch(wordOfTheDayUrl);
        const wordData = await wordResponse.json();

        // Extract the word, a single definition, and a single example
        const word = wordData.word;
        const singleDefinition = wordData.definitions && wordData.definitions.length > 0 
                                 ? wordData.definitions[0].text 
                                 : "No definition available";
        const singleExample = wordData.examples && wordData.examples.length > 0 
                              ? wordData.examples[0].text 
                              : "No example available";
        const partOfSpeech = wordData.definitions && wordData.definitions.length > 0 
                             ? wordData.definitions[0].partOfSpeech 
                             : "N/A";

        res.json({
            word,
            definition: singleDefinition,
            example: singleExample,
            partOfSpeech
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching word of the day details', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});