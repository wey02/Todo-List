import './sidebar.css';
import logo from '../assets/tasks.png';
import todayIcon from '../assets/calendar.png';
import fewDaysIcon from '../assets/calendar2.png';
import importantIcon from '../assets/important.png';
import completedIcon from '../assets/completed-task.png';
import projectIcon from '../assets/document-file.png';
import closeIcon from '../assets/close.png';


const renderContents = () =>{

    const parentElement = document.createElement('div');
    const container = document.createElement('div');
    container.className = 'category';

    for (const key in category){
        container.appendChild(createIconElemet(category[key]));

    }
    
    parentElement.appendChild(container)  
    parentElement.appendChild(close());

    return parentElement;
}

const todoLogo = () => {
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo';
    const todoName = document.createElement('h1');
    todoName.textContent = 'Todo';


    const logoImg = new Image();
    logoImg.src = logo;

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(todoName);


    return logoContainer;

}

const category = {
    today:{img: todayIcon, name: 'Today'},
    fewdays:{img: fewDaysIcon, name: 'Next 7 Days'},
    important:{img: importantIcon, name: 'Important'},
    completed:{img: completedIcon, name: 'Completed'},
    project:{img: projectIcon, name: 'My Project'}

};

const createIconElemet = ({img, name}) =>{
    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';
    const iconImg = new Image();
    iconImg.src = img;

    const iconName = document.createElement('span');
    iconName.textContent = name;

    iconContainer.appendChild(iconImg);
    iconContainer.appendChild(iconName);

    return iconContainer;

};

const close = () =>{
    const closeImg = new Image();
    closeImg.src = closeIcon;
    closeImg.className = 'close';

    return closeImg

};


export  {renderContents};