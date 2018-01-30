import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/app.css';
import './styles/navbar.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
