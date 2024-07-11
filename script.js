document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const indicators = document.querySelectorAll('.indicators ul li');
    const number = document.querySelector('.indicators .number');
    let currentItem = 0;

    function updateCarousel(newIndex) {
        items[currentItem].classList.remove('active');
        indicators[currentItem].classList.remove('active');

        currentItem = newIndex;

        items[currentItem].classList.add('active');
        indicators[currentItem].classList.add('active');
        number.textContent = `0${currentItem + 1}`;
    }

    document.getElementById('prev').addEventListener('click', function() {
        const newIndex = (currentItem === 0) ? items.length - 1 : currentItem - 1;
        updateCarousel(newIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        const newIndex = (currentItem === items.length - 1) ? 0 : currentItem + 1;
        updateCarousel(newIndex);
    });
});


