import React, { useEffect, useState } from 'react';
import Bondhu from '../Bondhu/Bondhu';
import Donation from '../Donation/Donation';

const Friends = () => {

    const [friend,setFriend] = useState([]);

    const [donation,setDonation] = useState([]);

    const handleAddDonation = (friend) =>{
        const newDonation = [ ...donation, friend];
        setDonation(newDonation)
    }

    useEffect( () => {
        fetch("friend.json")
        .then(res => res.json())
        .then(data => setFriend(data.results))
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                    {
                            friend.map(friend => <Bondhu
                            key={friend.cell}
                            friend={friend}
                            handleAddDonation={handleAddDonation}
                            >

                            </Bondhu>)
                        }
                    </div>
                        
                    
                    
                </div>
                <div className="col-md-3 mt-5">
                    <Donation
                    donation={donation}
                    ></Donation>
                </div>
            </div>
        </div>
    );
};

export default Friends;