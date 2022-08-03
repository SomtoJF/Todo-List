import {default as createNav} from './nav';
import './style.css';
let content = document.getElementById('content');

content.appendChild(createNav());