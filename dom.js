const header= document.querySelector(".article__header");
header.textContent= "Welcome the Awesome Jewel blog";

const article = document.querySelectorAll(".article__header")

for(let i=0; i < article.length; i++) {
    article[i].setAttribute("class", "article__header important")
    console.log(article[i])
}
