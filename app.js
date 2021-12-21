const toggleCard = id => {
    const displayingCard = document.querySelector(".show");
    const home = document.querySelector(".home");
    const currentCard = document.getElementById(id);

    if (home.classList.contains("show-home")) {
        home.classList.remove("show-home")
    }

    if (displayingCard) {
        displayingCard.classList.remove("show");
    }

    currentCard.classList.add("show");
    home.classList.add("hidden");
}

const showHome = () => {
    const displayingCard = document.querySelector(".show");
    const home = document.querySelector(".home");
    if (displayingCard) {
        displayingCard.classList.remove("show");
    }

    home.classList.add("show-home");
}


