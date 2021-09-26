import React from 'react';

const Donation = (props) => {

    const {donation} = props || {}

    const totalReducer =(previousValue, currentValue) =>previousValue +currentValue.donation
    const total = donation.reduce(totalReducer ,0).toFixed(2);
    return (
        <div>
            <h3>Friends Added : {donation.length}</h3>
            <h2>Total Donation: {total}</h2>
            <ul>
                {
                    donation.map(friend => <li>{friend.name.first} </li>)
                }
            </ul>
        </div>
    );
};

export default Donation;