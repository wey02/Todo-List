import './header.css';
// Import Font Awesome CSS
import menu from '../assets/menu.png';  

const renderHeaderContents = () => {
    // Render and append the header contents (including the menu icon)
    const header = document.querySelector('.header');
    header.appendChild(headerIcon());

    // Call the function to set up the click event listener
    
    showSideBar();
    closeSidebar();
    

    return header
};

const headerIcon = () => {
    const menuIcon = new Image();
    menuIcon.src = menu;
    menuIcon.alt = "Menu Icon"; // Optional: add alt text for accessibility

    return menuIcon;
};

const elements = () =>{
    const sideBar = document.querySelector('.sideBar');
    const category = document.querySelector('.category');
    const close = document.querySelector('.close');
    const menuIcon = document.querySelector('.header img');
    
    return {sideBar, category, close, menuIcon};
}

const showSideBar = () => {
    
    const {sideBar, category, close, menuIcon} = elements();

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            sideBar.classList.add('show');
            category.classList.add('show');
            close.classList.add('show')

            const iconContainer = document.querySelectorAll('.icon-container');
            iconContainer.forEach(container => {
                container.classList.add('show');
            });
        });
    }
};

const closeSidebar = () =>{

    const {sideBar, category, close} = elements();

    close.addEventListener('click', () =>{
        sideBar.classList.remove('show');
        category.classList.remove('show');
        close.classList.remove('show');
    });

    
}

export default renderHeaderContents;
