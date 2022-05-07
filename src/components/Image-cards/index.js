import React, { useEffect } from 'react';
import '../../utils/cards'


function Imagecards() {

useEffect(() => {  
  const cards = document.querySelectorAll(".card");
console.log(cards)
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});

function removeActiveClass() {
  cards.forEach((card) => {
    console.log(card)
    card.classList.remove("active");
  });
}}, []);


//   const cards = document.querySelectorAll(".card");
// console.log(cards)
// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     removeActiveClass();
//     card.classList.add("active");
//   });
// });

// function removeActiveClass() {
//   cards.forEach((card) => {
//     console.log(card)
//     card.classList.remove("active");
//   });
// }
// useEffect(() => {  
//   const script = document.createElement("script");  
//   script.src = "https://website.com/analytics.js";  
//   script.async = true;  
//   document.body.appendChild(script);  
//   }, []);

    return (
      <div className="page__container">
  <div className="container">
    <div className="cards">
      <div className="card c1 active">
        <div className="card__head">
          <h3>Cars</h3>
        </div>
        <div className="card__data">
          <h2>Cars</h2>
          <h4>Four Wheel Drive</h4>
        </div>
      </div>
      <div className="card c2">
        <div className="card__head">
          <h3>Mountain</h3>
        </div>
        <div className="card__data">
          <h2>Mountain</h2>
          <h4>View of a foggy mountain</h4>
        </div>
      </div>
      <div className="card c3">
        <div className="card__head">
          <h3>Flower</h3>
        </div>
        <div className="card__data">
          <h2>Flower</h2>
          <h4>A Pink flower</h4>
        </div>
      </div>
      <div className="card c4">
        <div className="card__head">
          <h3>Sky</h3>
        </div>
        <div className="card__data">
          <h2>Sky</h2>
          <h4>Mountain covered in clouds</h4>
        </div>
      </div>
      <div className="card c5">
        <div className="card__head">
          <h3>Design</h3>
        </div>
        <div className="card__data">
          <h2>Design</h2>
          <h4>Designing a prototype</h4>
        </div>
      </div>
      <div className="card c6">
        <div className="card__head">
          <h3>Snow</h3>
        </div>
        <div className="card__data">
          <h2>Snow</h2>
          <h4>House covered by snowe</h4>
        </div>
      </div>
    </div>
  </div>
  <script src="cards.js"></script>
</div>

    );
  }
  
  export default Imagecards;