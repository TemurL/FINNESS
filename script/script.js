const menuBtn = document.getElementsByClassName('header__menu-btn')[0];
const mobMenu = document.getElementsByClassName('mob-menu')[0];
const html = document.getElementsByTagName('html')[0];
const mobMenuListItems = mobMenu.children[0].children;
const piePartsArr = document.getElementsByClassName('pie__part');
const pieLegendList = document.getElementsByClassName('pie-legend__li');
const diagramsButtonsArr = Array.from(document.getElementsByClassName('diagrams__button'));
const diagramsArr = Array.from(document.getElementsByClassName('diagrams__diagram'))
const diagramsColumns = document.getElementsByClassName('column');

let modBtn = 'header__menu-btn_active';
let modMenu = 'mob-menu_active';
let modhtml = 'html_scroll-block';
let modpiePart = 'pie__part_active';
let modpieLegend = 'pie-legend__li_active';
let modpieLegendUnset = 'pie-legend__li_unset';
let modDiagramBtn = 'diagrams__button_active';
let modDiagramBlock = 'diagrams__diagram_active';

const diagramsColunmsHightSet = () => {
    for (let i = 0; i < diagramsColumns.length; i++) {
        let value = parseInt(diagramsColumns[i].textContent) + 50;
        diagramsColumns[i].style.height = `${value}px`
    }
}

diagramsColunmsHightSet()

const menuAct = () => {
    menuBtn.classList.toggle(modBtn);
    mobMenu.classList.toggle(modMenu);
    html.classList.toggle(modhtml);
}

const pieAct = (elem) => {
    if (elem.classList.contains('pie-legend__li')) {
        let key = elem.classList[1].split('__')[1];
        for (let i = 0; i < piePartsArr.length; i++) {
            let matchClass = piePartsArr[i].classList[2].split('__')[1];
            if (matchClass === key) {
                piePartsArr[i].classList.toggle(modpiePart);
            } else {
                pieLegendList[i].classList.toggle('pie-legend__li_unset');
            }
        }
    } else {
        let key = elem.classList[2].split('__')[1];
        for (let i = 0; i < pieLegendList.length; i++) {
            let matchClass = pieLegendList[i].classList[1].split('__')[1];
            if (matchClass === key) {
                pieLegendList[i].classList.toggle(modpieLegend);
            } else {
                pieLegendList[i].classList.toggle(modpieLegendUnset);
            }
        }
    }
}

const diagramsAct = (button) => {
    diagramsButtonsArr.forEach((b) => b.classList.remove(modDiagramBtn));
    button.classList.add(modDiagramBtn);
    let buttonClass = button.classList[1];
    diagramsArr.forEach((block) => {
        if (block.classList[1] === buttonClass) {
            block.classList.add(modDiagramBlock);
        } else {
            block.classList.remove(modDiagramBlock);
        }
    })
}
menuBtn.addEventListener('click', menuAct);

for (let i = 0; i < mobMenuListItems.length; i++) {
    mobMenuListItems[i].children[0].addEventListener('click', menuAct);
}

for (let i = 0; i < pieLegendList.length; i++) {
    pieLegendList[i].addEventListener('mouseover', () => {pieAct(pieLegendList[i])});
    pieLegendList[i].addEventListener('mouseout', () => {pieAct(pieLegendList[i])});
    piePartsArr[i].addEventListener('mouseover', () => {pieAct(piePartsArr[i])});
    piePartsArr[i].addEventListener('mouseout', () => {pieAct(piePartsArr[i])});
}

diagramsButtonsArr.forEach((button) => {
    button.addEventListener('click', () => diagramsAct(button));
})