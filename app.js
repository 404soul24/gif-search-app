const searchBtn = document.getElementById("search-btn");
const gifInput = document.getElementById("gif");
const gifDisplay = document.getElementById("gif-display");

// Replace 'dc6zaTOxFJmzC' with your own API key if you get one from Giphy Developers
const apiKey = "dc6zaTOxFJmzC";

searchBtn.addEventListener("click", async () => {
  try{
    const searchTerm = gifInput.value;
  if (!searchTerm) return;

  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;

  const response = await fetch(url);

  const gifData = await response.json();
  gifDisplay.src = gifData.data.images.original.url;
  gifDisplay.style.display = "block";
  gifDisplay.alt = gifData.data.title;
} catch (err) {
    console.error("Error fetching GIF:", err);
}
});
