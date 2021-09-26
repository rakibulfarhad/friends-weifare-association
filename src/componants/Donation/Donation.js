import React from 'react';

const Donation = (props) => {

    const {donation} = props || {}

    const totalReducer =(previousValue, currentValue) =>previousValue +currentValue.donation
    const total = donation.reduce(totalReducer ,0).toFixed(2);
    return (
        <div>
            <h3>Friends Added : {donation.length}</h3>
            <h4>Total Donation:$ {total}</h4>
            <ul>
                {
                    donation.map(friend => <li>Name: {friend.name.first} </li>)
                }
            </ul>
        </div>
    );
};

export default Donation;