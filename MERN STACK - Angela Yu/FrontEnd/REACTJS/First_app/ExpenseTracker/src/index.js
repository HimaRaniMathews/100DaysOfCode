//The first file to be imported
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; //==App.js ,here no need to specify .js or dependencies with extensions

ReactDOM.render(< App /> , document.getElementById('root'));
/*'root' is the only body element in SPA i.e, index.html from public module
we are rendering App.js to body of the SPA
 */