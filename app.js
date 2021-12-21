const toggleCard = id => {
    const displayingCard = document.querySelector(".show");
    console.log(displayingCard);
    if (displayingCard) {
        displayingCard.classList.remove("show");
    }


    const currentCard = document.getElementById(id);
    currentCard.classList.add("show");
    // console.log(currentCard);
}
