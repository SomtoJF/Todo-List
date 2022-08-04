import {default as createNav} from './nav';
import {default as todoType} from './todoType';
import './style.css';
let content = document.getElementById('content');

content.appendChild(createNav());
content.appendChild(todoType());