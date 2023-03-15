const btnel = document.getElementById("btn");
const quoteel = document.getElementById("quote");
const authorel = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";



async function getQuote(){
    try {
        btnel.innerText = "Loading...";
        btnel.disabled = true;
        quoteel.innerText = "Updating...";
authorel.innerText = "Updating...";
        const response = await fetch(apiURL);
const data = await response.json();
const quoteContent = data.content;
const quoteAuthor = data.author;
quoteel.innerText = quoteContent;
authorel.innerText = "~ " + quoteAuthor;
btnel.innerText = "Get a quote";
        btnel.disabled = false;
        
    } catch (error) {
        quoteel.innerText = "an error occured, try again later";
        authorel.innerText = "an error occured";
        btnel.innerText = "Get a quote";
        btnel.disabled = false;
    }

}


btnel.addEventListener("click", getQuote);