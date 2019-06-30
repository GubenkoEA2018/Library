import React from 'react';
import './App.css';
import ListOfBooks from './ListOfBooks/ListOfBooks';
// import Book from './Book/Book';
import {BrowserRouter,
// Route
} from "react-router-dom";
// import DevTools from 'mobx-react-devtools';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/*<script src='http://jsonapiplayground.reyesoft.com/v2/hbooks'></script>*/}
                <ListOfBooks />
                {/*<DevTools/>*/}
                {/*<Route path='/' component={ListOfBooks} />*/}
                {/*<Route path='/book' component={Book} />*/}
            </div>
         </BrowserRouter>
    )
}




export default App;
