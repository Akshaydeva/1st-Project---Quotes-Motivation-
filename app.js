// Get Quotes from api
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];
function newQuote(){
   
   //Pick a random quote
   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   //    console.log(quote); 
   // authorText.textContent = quote.author;
   // CHECK IF AUTHOR FILED IS BLANK AND REPLACE IT WITH 'UNKNOWN'
   if(!quote.author){
       authorText.textContent = 'Unknown';
   } else{
       authorText.textContent = quote.author
   }
   quoteText.textContent = quote.text;
}
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
const response = await fetch(apiUrl);
apiQuotes = await response.json();
// console.log(apiQuotes);
newQuote();
} catch (error){
        alert(error);
    }
}

function fbQuote(){
    const fbUrl = `https://www.facebook.com/theengineerbroofficial/`
    window.open(fbUrl, '_blank'); 
    // '_blank'=> allow to us open a new window in new page.
}
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', fbQuote);
getQuotes();
// loading();
//Pick a random quote
// const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// //    console.log(quote); 
// // authorText.textContent = quote.author;
// // CHECK IF AUTHOR FILED IS BLANK AND REPLACE IT WITH 'UNKNOWN'
// if(!quote.author){
//     authorText.textContent = 'Unknown';
// } else{
//     authorText.textContent = quote.author
// }
// quoteText.textContent = quote.text;
