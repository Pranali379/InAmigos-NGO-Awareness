document.addEventListener("DOMContentLoaded", () => {

    // ================= Reveal Animation =================

    const reveals = document.querySelectorAll(".reveal");

    function revealSection() {

        const windowHeight = window.innerHeight;

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if (top < windowHeight - 100) {

                section.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealSection);

    revealSection();

    // ================= Counter Animation =================

    const counters = document.querySelectorAll(".counter");

    const speed = 150;

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(update, 20);

            } else {

                counter.innerText = target.toLocaleString() + "+";

            }

        };

        update();

    });

    // ================= Back To Top =================

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        }

        else {

            topBtn.style.display = "none";

        }

    });

    topBtn.onclick = () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

});