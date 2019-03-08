var quotes=[
    {
        quote:"A man falls in love through his eyes, a woman through her ears",
        author:"WOODROW WYATT"
    },
    {
        quote:"How can you love another if you don’t love yourself? ",
        author:"UNKNOWN"
    },
    {
        quote:"Learn to be happy with what you have while you pursue all that you dream.",
        author:"J ROHN"
    },
    {
        quote:"I have learned more from my failures than from my success.",
        author:"H DAVY"
    },
    {
        quote:"Friends are like stars, they always seem to shine when the night is at its darkest.",
        author:"MEREDITH SHEA"
    },
    {
        quote:"The friendship that can cease has never been real",
        author:"SAINT JEROME"
    },
    {
        quote:"Love – respect – royalty, that surely is what true friendship is all about.",
        author:"Jara McKenzie"
    },
    {
        quote:"When friendship is once rooted fast, it is a plant no storm can blast.",
        author:"ANONYMOUS"
    },
    {
        quote:"I love You",
        author:"Duy Khoa :))"
    }
];
function randomNumber(range)
{
    return Math.floor(Math.random()*range);//0-range
}
function getQuote(){
    return quotes[randomNumber(quotes.length)];
}
function makeQuote()
{
    var quote=getQuote();
    var eleQuote=document.getElementById('quote');
    var eleAuthor=document.getElementById('author');
    eleQuote.innerText=quote.quote;
    eleAuthor.innerText=quote.author;
}
window.onload =makeQuote;