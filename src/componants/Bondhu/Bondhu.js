import React from 'react';
import "./Bondhu.css"

const Bondhu = (props) => {

    const {name, picture,email,location,gender,donation } = props.friend || {};
    return (
        <div className="col-md-4 mt-5">
            <div className="friend-image">
                <div className="card  friend-card " style={{ "width": "18rem" }}>
                    <img src={picture.large} className="card-img-top mx-auto" alt="..." />
                    <div className="card-body mx-auto">
                        <h5 className="card-title">Name :{name.first}</h5>
                        
                    </div>
                    <ul className="">
                        <p className="mx-auto"><small>Email: {email}</small></p>
                        <h6 className="mx-auto">City: {location.city}</h6>
                        <p className="mx-auto">Gender: {gender}</p>
                        <h6 className="mx-auto">Donation: $ {donation}</h6>
                        <button onClick={() =>props.handleAddDonation(props.friend)} className="btn btn-primary mb-2"> <i class="fas fa-shopping-cart"></i> Add to Friend</button><br />
                        <i class="fab fa-facebook mx-5"></i>
                        <i class="fab fa-instagram"></i>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Bondhu;