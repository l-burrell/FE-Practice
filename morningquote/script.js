
fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
.then(response => response.json())
.then(data => {
    // const random = Math.floor(Math.random() * 10);
    const selection = new Date()
    const day = selection.getDay()
    const quote = data.data[day];
    const author = quote["quoteAuthor"]
    const content = quote["quoteText"]

    document.getElementById("author").textContent = author;
    document.getElementById("content").textContent = content;
})

