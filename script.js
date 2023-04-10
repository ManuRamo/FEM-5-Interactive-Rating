const rating1 = document.getElementById("rating-1");
const rating2 = document.getElementById("rating-2");

const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit");
const rated = document.getElementById("rated");

let clicked = false;

ratingBtns.forEach(button => {
    button.addEventListener("click", function () {
        clicked = true;
        rated.innerHTML = `You selected ${button.innerHTML} out of 5`;
    });
});

submitBtn.addEventListener("click", function () {
    if (clicked) {
        rating1.classList.toggle("hidden");
        rating2.classList.toggle("hidden");
    } else {
        alert("Please, select a rating");
    }
});
