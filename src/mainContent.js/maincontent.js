import './maincontent.css';
import add from '../assets/plus.png';

const renderMain = ( ) =>{

    const main = document.querySelector('.content');
    main.appendChild(categoryChoice());
    main.appendChild(addNewTask());
    
    return main;

};

const elements = () => {
    const iconContainer = document.querySelectorAll('.icon-container');
    const h1 = document.createElement('h1');
    const task = document.createElement('div');
    const addText = document.createElement('p');
    const plusImg = new Image();
    task.className = 'task';
    return {iconContainer, h1, task, plusImg, addText};
};


const categoryChoice = () => {
    const { iconContainer, h1} = elements();
    
    const defaultText = 'Today';
    h1.textContent = defaultText;

    iconContainer.forEach(container => {
        container.addEventListener('click', () => {
            const choice = container.textContent.trim(); // Trim whitespace
            h1.textContent = choice;
        });
    });

    return h1;
};

const addNewTask = () =>{

    const {task, plusImg, addText } = elements();

    plusImg.src = add;
    task.appendChild(plusImg);

    addText.textContent = 'Add new task';
    task.appendChild(addText);

    return task;

}



export default renderMain;