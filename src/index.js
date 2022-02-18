import './style.css';
import printMe from './test';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'Boom!'
body.appendChild(h1);

printMe();

