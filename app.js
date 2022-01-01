const faqQuestionAnswer = document.querySelectorAll('.faq-question-answer');
const faqIcons = document.querySelectorAll('.faq-icon');
const navResponsive =document.querySelector('.nav-responsive');
const toggleLinks = document.querySelectorAll('.toggle-links div');
function hideAllAnswers() {
    faqQuestionAnswer.forEach(answer => answer.style.display = "none");
    faqIcons.forEach(faqIcon => {
        faqIcon.innerHTML = '<i class="fas fa-plus"></i>';
    });
}
hideAllAnswers();
function showAnswer(index) {
    if(faqQuestionAnswer[index].style.display == "none") {
        hideAllAnswers();
        faqIcons[index].innerHTML = '<i class="fas fa-minus"></i>';
        faqIcons[index].style.marginTop = '-60px';
        faqQuestionAnswer[index].style.display = "block";
    }
    else {
        faqIcons[index].innerHTML = '<i class="fas fa-plus"></i>';
        faqIcons[index].style.marginTop = '0px';
        faqQuestionAnswer[index].style.display = "none";
    }
}
function changeNav() {
    if(navResponsive.style.display == 'none') {
        navResponsive.style.display = 'block';
    }
    else {
        navResponsive.style.display = "none";
    }
}

function removeActive() {
    toggleLinks.forEach(toggleLink => toggleLink.classList.remove('toggle-link-active'));
}

function changePlan(element) {
    removeActive();
    element.classList.add('toggle-link-active');
    if(element.innerHTML == "Yearly") {
        document.getElementById("price").innerHTML = "29.99";
        document.querySelector(".discount").style.display = "block";
        document.querySelector(".pricing-label").innerHTML = "Best Value";
        document.getElementById("price-title").style.marginTop = '24px';
    }
    else {
        document.getElementById("price").innerHTML = "49.99";
        document.querySelector(".discount").style.display = "none";
        document.getElementById("price-title").style.marginTop = '50px';
        document.querySelector(".pricing-label").innerHTML = "Popular";
    }
}