function toggleBackgroundColor() {
    const body = document.body;

    if (body.classList.contains("dark-mode")) {
        // If currently in dark mode, switch to light mode
        body.classList.remove("dark-mode");
    } else {
        // If currently in light mode, switch to dark mode
        body.classList.add("dark-mode");
    }
}

let words=document.querySelectorAll(".word");
words.forEach((word)=>
{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>
    {
        let span=document.createElement("span")
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});

let currentWordIndex=0;
let maxWordIndex = words.length-1;
words[currentWordIndex].computedStyleMap.opacity="1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1"; // Corrected computedStyleMap to style
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);
////////////////////sticky navbar//////////////////////

const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})

// //////////navlistmenudrop//////////////////////
let menuIcon=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

// window.onscroll=()=>{
//     menuIcon.classList.remove("bx-x");
//     navlist.classList.replace("open");
// }

