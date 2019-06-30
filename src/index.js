import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Router, Route} from 'react-router';
// import createHashHistory from 'history/createHashHistory';
// import Book from "./Book/Book";
// import DevTools from 'mobx-react-devtools';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// const history = createHashHistory();

// ReactDOM.render(
//     <Router history={history}>
//         <Route path="/" component={App}/>
//         <DevTools/>
//         <Route path="/book" component={Book}/>
//     </Router>
// );
