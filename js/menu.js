/*MENU*/

const menuSticky = document.getElementById("menu");

        window.addEventListener("scroll", () => {
            menuSticky.classList.toggle("scrolled", window.pageYOffset > 13);
        });

        document.querySelectorAll(".borde").forEach(item => {
            item.addEventListener("click", () => {
                const audio = new Audio("../audio/sfx.mp3");
                audio.play();
            });
        });





