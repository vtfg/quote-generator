const randomButton = document.querySelector("#random");

randomButton.addEventListener("click", async () => getRandom());

async function getRandom() {
  const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
  const quoteContent = document.querySelector("#quote");
  const quoteAuthor = document.querySelector("#name");
  const quoteGenre = document.querySelector("#genre");

  await fetch(url)
    .then(function (response) {
      if (!response.ok)
        throw new Error(
          "Service unavailable, try again later. Status: " + response.status
        );

      return response.json();
    })
    .then(function (data) {
      quoteContent.innerHTML = "“" + data.quote.quoteText + "”";
      quoteAuthor.innerHTML = data.quote.quoteAuthor
        ? data.quote.quoteAuthor
        : "unspecified";
      quoteGenre.innerHTML =
        data.quote.quoteGenre != undefined
          ? data.quote.quoteGenre
          : "unspecified";
    })
    .catch(function (error) {
      console.error(error.message);
    });
}
