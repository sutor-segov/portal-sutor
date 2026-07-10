document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            menuButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');

            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    const subButtons = document.querySelectorAll('.sub-btn');
    const subContents = document.querySelectorAll('.sub-content');

    subButtons.forEach(button => {
        button.addEventListener('click', () => {
            subButtons.forEach(btn => btn.classList.remove('active'));
            subContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const targetSub = button.getAttribute('data-sub');
            document.getElementById(targetSub).classList.add('active');
        });
    });
});