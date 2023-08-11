// 이벤트 대상.addEventListener("이벤트 이름", (매개변수)=>{})
const link = document.querySelector("a");

link.addEventListener("click", (e   ) => {
    e.preventDefault();
    console.log("Click");
    let href = e.target.getAttribute("href");
    console.log(href);
});

const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
    box.style.background = "pink";
})

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "aqua";
})

const list = document.querySelectorAll("ul li");

for(let el of list){
    let originTxt = el.innerText;
    el.addEventListener("click", (e) => {
        e.preventDefault();
        // e.target.innerText = "item";
        if(e.target.innerText === "item"){
            e.target.innerText = originTxt;
        }else{
            e.target.innerText = "item";
        }

        // 만약 innerTxt가 item이면 OriginTxt로 바꾸고 그것이 아니라면, item으로 변경.
    });
}