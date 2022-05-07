const cards = document.querySelectorAll(".card");
console.log(cards)
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});


export function removeActiveClass() {
  cards.forEach((card) => {
    console.log(card)
    card.classList.remove("active");
  });
}

