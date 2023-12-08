// Function to fetch a new background image from Unsplash
const fetchNewBackgroundImage = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=dark_wallpaper&client_id=FypcUjo1nqpvJrkq77hXGYZR9z__ejXa-9VT1X3uXSU`);
      const data = await response.json();
      return data.urls.full;
    } catch (error) {
      console.error("Error fetching image from Unsplash:", error);
      return null;
    }
  };
  
  // Main function to get the background image
  const fetchBackgroundImage = async () => {
    const today = new Date().toDateString();
    const cachedData = JSON.parse(localStorage.getItem('backgroundImage'));
  
    if (cachedData && cachedData.date === today) {
      return cachedData.url; // Return cached URL if date hasn't changed
    } else {
      const newImageUrl = await fetchNewBackgroundImage();
      if (newImageUrl) {
        localStorage.setItem('backgroundImage', JSON.stringify({ url: newImageUrl, date: today }));
      }
      return newImageUrl;
    }
  };
  
  export default fetchBackgroundImage;