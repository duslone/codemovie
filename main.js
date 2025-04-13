var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close-video");

playButton.onclick = () => {
    video.classList.add("show-video");
    myvideo.play();
};

closebtn.onclick = () => {
    video.classList.remove("show-video");
    myvideo.pause();
};


document.addEventListener("DOMContentLoaded", function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || {};

    function addFavoriteFeature(movieBox) {
        const title = movieBox.querySelector(".movie-title").textContent;
        const type = movieBox.querySelector(".movie-type").textContent;
        const image = movieBox.querySelector(".movie-box-img").src;
        const link = movieBox.querySelector(".watch-btn").href;


        const heartIcon = document.createElement("i");
        heartIcon.classList.add("bx", "bx-heart", "favorite-icon");
        if (favorites[title]) {
            heartIcon.classList.add("active");
        }


        movieBox.insertBefore(heartIcon, movieBox.querySelector(".box-text"));

        heartIcon.addEventListener("click", function (e) {
            e.preventDefault();
            const isActive = heartIcon.classList.toggle("active");

            if (isActive) {
                favorites[title] = {
                    title: title,
                    type: type,
                    image: image,
                    link: link
                };
            } else {
                delete favorites[title];
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    }


    const movieBoxes = document.querySelectorAll(".movie-box");
    movieBoxes.forEach(box => addFavoriteFeature(box));


    const swiper = new Swiper(".popular-content", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function (e) {
        const searchTerm = e.target.value.toLowerCase();
        movieBoxes.forEach(box => {
            const title = box.querySelector(".movie-title").textContent.toLowerCase();
            box.style.display = title.includes(searchTerm) ? "block" : "none";
        });
    });
});



  