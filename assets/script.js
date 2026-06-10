
// PROJECT SLIDER

let container = document.querySelector(".project-container")

let next = document.querySelector("#next")
let prev = document.querySelector("#prev")

next.addEventListener("click",()=>{

    container.scrollLeft += 320

})

prev.addEventListener("click",()=>{

    container.scrollLeft -= 320

})


// READ MORE BUTTON

let btn = document.getElementById("readMoreBtn");
let moreText = document.getElementById("moreText");

btn.addEventListener("click", () => {
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
    }
});