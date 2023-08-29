const menuBtn = document.getElementsByClassName('header__menu-btn')[0];
const mobMenu = document.getElementsByClassName('mob-menu')[0];
const body = document.getElementsByClassName('body')[0];

menuBtn.addEventListener('click', () => {
    let modBtn = 'header__menu-btn_active';
    let modMenu = 'mob-menu_active';
    let modBody = 'body_scroll-block';
    if (menuBtn.classList.contains(modBtn)) {
        menuBtn.classList.remove(modBtn);
        mobMenu.classList.remove(modMenu);
        body.classList.remove(modBody);
    } else {
        menuBtn.classList.add(modBtn);
        mobMenu.classList.add(modMenu);
        body.classList.add(modBody);
    }
})


