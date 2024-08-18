import './index.css';
import {renderContents} from './sb/sideBar.js';
import renderHeaderContents from './header/header.js'
import renderMain from './mainContent.js/maincontent.js';

const displaySideBarContent = () =>{
    const sideBar = document.querySelector('.sideBar');

    sideBar.appendChild(renderContents());
    renderHeaderContents();
    renderMain();



    
}

document.body.appendChild(displaySideBarContent());