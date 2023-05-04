//const box1 = document.getElementByClassName(".box1");
const b1 = document.querySelector(".box1");

b1.addEventListener("click", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "#556699";
});

const b2 = document.querySelector(".box2");

// resize?
b2.addEventListener("resize", (e) => {
    console.log(e);
    e.target.style.backgroundColor = "#111111";
});
