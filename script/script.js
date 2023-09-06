const menuBtn = document.getElementsByClassName('header__menu-btn')[0];
const mobMenu = document.getElementsByClassName('mob-menu')[0];
const html = document.getElementsByTagName('html')[0];
const mobMenuListItems = mobMenu.children[0].children;

let modBtn = 'header__menu-btn_active';
let modMenu = 'mob-menu_active';
let modhtml = 'html_scroll-block';

const menuAct = () => {
    menuBtn.classList.toggle(modBtn);
    mobMenu.classList.toggle(modMenu);
    html.classList.toggle(modhtml);
}

menuBtn.addEventListener('click', menuAct);

for (let i = 0; i < mobMenuListItems.length; i++) {
    mobMenuListItems[i].children[0].addEventListener('click', menuAct);
}
