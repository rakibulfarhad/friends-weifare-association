import React from 'react';
import "./Bondhu.css"

const Bondhu = (props) => {

    const {name, picture,email,location,gender,donation } = props.friend || {};
    return (
        <div className="col-md-4 mt-5">
            <div className="friend-image">
                <div className="card " style={{ "width": "18rem" }}>
                    <img src={picture.large} className="card-img-top mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name :{name.first}</h5>
                        
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Country: {location.country}</li>
                        <li className="list-group-item">Gender: {gender}</li>
                        <li className="list-group-item">Donation: {donation}</li>
                        <button onClick={() =>props.handleAddDonation(props.friend)} className="btn btn-primary"> <i class="fas fa-shopping-cart"></i> Add to Friend</button>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Bondhu;