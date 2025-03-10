document.querySelectorAll('.flip-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.card').classList.toggle('flipped');
    });
});
