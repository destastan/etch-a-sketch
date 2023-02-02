const container = document.querySelector(".container");



function appendChildDivs(num) {
    for (let i = 0; i < num * num; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child-div");

        container.appendChild(childDiv);

        childDiv.style.height = (100/num) + "%";
        childDiv.style.width = (100/num) + "%";
        
    }
}

// function changeColor() {
//     childDiv.style.backgroundColor = "red";
// }








appendChildDivs(99)

let childDivs = document.querySelectorAll(".child-div");

childDivs.forEach(e => e.addEventListener("mouseenter", () => {
    e.classList.add("onhover");
}))


// childDivs.forEach(function(childDiv) {
//     childDiv.addEventListener('mouseover', changeColor());
// });
console.log(childDivs)
