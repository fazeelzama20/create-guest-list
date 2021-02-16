import { useState } from "react";
import React from 'react';
require('./style.css');
const GuestList: React.FunctionComponent = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);


    const addGuest = () => {
        setName('');
        if (name !== '') {
            setGuests([...guests, name]);
        }
    }

    const handleOnChange = (event: any) => {
        setName(event.target.value)
    }
    return (
        <React.Fragment>
            <h3>Guest List</h3>
            <ul>
                {guests.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <input className='guest-input' placeholder={'Enter Name'} value={name} onChange={handleOnChange} />
            <button className='guest-btn' onClick={addGuest}> Add Guest </button>
        </React.Fragment>
    );
}

export default GuestList;