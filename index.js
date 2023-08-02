function hoverButton() {
    document.querySelector('.btn-join').classList.add('btn-join-hovered');
}

function unhoverButton() {
    document.querySelector('.btn-join').classList.remove('btn-join-hovered');
}

function returnSite() {
    location.reload();
}

// функционал hamMenu при адаптиве
window.addEventListener('resize', function() {
    const hamMenu = document.getElementById("hamMenu");
    if (window.innerWidth >= 1130) {
        // Показываем кнопку hamMenu, если ширина экрана меньше или равна 1130 пикселей
        hamMenu.style.display = 'none';
    } else {
        // Скрываем кнопку hamMenu, если ширина экрана больше 1130 пикселей
        hamMenu.style.display = 'block';
    }
});

// Вызываем слушатель события при загрузке страницы для обработки начального состояния (hamMenu)
window.addEventListener('load', function() {
    const hamMenu = document.getElementById("hamMenu");
    if (window.innerWidth >= 1130) {
        hamMenu.style.display = 'none';
    } else {
        hamMenu.style.display = 'block';
    }
});


// функционал navList при адаптиве
window.addEventListener('resize', function() {
    const navList = document.getElementById("navList");
    if (window.innerWidth <= 1130) {
        // Скрываем navList, если ширина экрана меньше или равна 1130 пикселей
        navList.style.display = 'none';
    } else {
        // Показываем navList, если ширина экрана больше 1130 пикселей
        navList.style.display = 'block';
    }
});


// функционал btnJoin при адаптиве
window.addEventListener('resize', function() {
    const btnJoin = document.getElementById("btnJoin");
    if (window.innerWidth <= 1130) {
        // Скрываем btnJoin, если ширина экрана меньше или равна 1130 пикселей
        btnJoin.style.display = 'none';
    } else {
        // Показываем btnJoin, если ширина экрана больше 1130 пикселей
        btnJoin.style.display = 'block';
    }
});
