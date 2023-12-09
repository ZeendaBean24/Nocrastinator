const apiKey = 'MuKuoMHhXQg+KX/lBI/xqA==1VIFk3hqFoMMFIYB'; 

const categories = [
    'attitude'
    // Add more categories as needed
];

const fetchQuote = async () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const response = await fetch(`https://api.api-ninjas.com/v1/quote?category=${randomCategory}`, {
        // mode: 'no-cors',
        headers: { 'X-Api-Key': apiKey }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { ...data[0], category: randomCategory }; 
};

export default fetchQuote;