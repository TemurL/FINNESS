const menuBtn = document.getElementsByClassName('header__menu-btn')[0];
const mobMenu = document.getElementsByClassName('mob-menu')[0];
const html = document.getElementsByTagName('html')[0];

menuBtn.addEventListener('click', () => {
    let modBtn = 'header__menu-btn_active';
    let modMenu = 'mob-menu_active';
    let modhtml = 'html_scroll-block';
    if (menuBtn.classList.contains(modBtn)) {
        menuBtn.classList.remove(modBtn);
        mobMenu.classList.remove(modMenu);
        html.classList.remove(modhtml);
    } else {
        menuBtn.classList.add(modBtn);
        mobMenu.classList.add(modMenu);
        html.classList.add(modhtml);
    }
})


