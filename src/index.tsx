import React from 'react';
import ReactDOM from 'react-dom';
import GuestList from './GuestList';

const App = () => {
    return (
        <React.Fragment>
            <h3>Hi, I am in react typescript application</h3>
            <h5>Enter the guest name and add into the list</h5>
            <GuestList />
        </React.Fragment>);
};

ReactDOM.render(<App />, document.querySelector('#root'));