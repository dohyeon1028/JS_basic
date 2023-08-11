let wrap = document.getElementById("wrap");
console.log(wrap);

let articles = wrap.querySelectorAll("article");
console.log(articles);

articles[0].style.backgroundColor = "red";
articles[1].style.backgroundColor = "orange";
articles[2].style.backgroundColor = "yellow";

// articles.forEach((el, index) => {
//     el.style.color = "pink";
//     el.style.borderBottom = "2px solid #000";
// });

for (let i = 0; i < articles.length; i++) {
    articles[i].style.color = "pink";
    articles[i].style.borderBottom = "2px solid #000";   
}

