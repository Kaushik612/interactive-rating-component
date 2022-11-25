const ratingBtns = document.querySelectorAll('.rating__btn');
const submitBtn = document.getElementById('submitBtn');
const rateAgain = document.getElementById('rate__again');

const ratingContainer = document.querySelector('.rating__container');
const thankYouContainer = document.querySelector('.thankyou__container');

const submittedRating = document.getElementById('selected__rating');

let rating = 1;


ratingBtns.forEach((ratingBtn)=> {
    ratingBtn.addEventListener('click', function(){
        rating = ratingBtn.textContent;
        console.log(rating);
    })
});

$("button").click(function(){
    $("button").removeClass("active");
    $(this).addClass("active");
 });

 submitBtn.addEventListener('click', function(){
    ratingContainer.style.display = 'none';
    thankYouContainer.classList.remove('hidden');

    submittedRating.innerHTML = rating;
 });


 rateAgain.addEventListener('click', function(){
    thankYouContainer.classList.add('hidden');
    ratingContainer.style.display = 'block';
 });
