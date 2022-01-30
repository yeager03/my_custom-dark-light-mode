document.addEventListener("DOMContentLoaded", () => {

    let btn = document.querySelector(".btn"),
        icon = document.querySelector(".icon");

    btn.addEventListener("click", () => {

        animate(btn);
        let body = document.body;
        body.classList.toggle("light");
        body.classList.toggle("dark");

        if (body.className === "dark") {
            btn.innerHTML = `<img src="sun.svg" alt="" class="icon">`;
        } else {
            btn.innerHTML = `<img src="moon.svg" alt="" class="icon">`;
        }


    });


    function animate(selector) {
        selector.classList.add("animate");
        selector.setAttribute("disabled", true);

        setTimeout(() => {
            selector.classList.remove("animate");
            selector.removeAttribute("disabled");
        }, 600);

        // console.log(selector.getAttribute("disable"));
    }
});