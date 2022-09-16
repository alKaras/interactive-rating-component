let ratings = document.querySelectorAll(".component-link");
let btn = document.querySelector(".component-button");
let component = document.querySelector(".component");
let thankyou = document.querySelector(".thank-you");
let span = document.getElementById("rating");



for (let i = 0; i < ratings.length; i++) {
    ratings[i].addEventListener('click', () => {
        event.preventDefault();
        let rating = ratings[i].innerHTML;
        
        for (let i = 0; i < ratings.length; i++) {
            ratings[i].classList.contains('selected');
            ratings[i].classList.remove('selected');
        }

        ratings[i].classList.add('selected');

        btn.addEventListener('click', () => {
            event.preventDefault();
            component.style.display = 'none';
            thankyou.style.display = 'block';
            span.innerHTML = rating;
        })
    })
}
