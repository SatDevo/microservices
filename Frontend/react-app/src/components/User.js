import React from 'react';

export const Users = ({users, topUser, show}) => (
    <div className="pricing-table">
    {users.map((user) =>
        <div className="pricing-option" 
             style={{color:show && user.id == topUser?"#f85e6a":"#212121"}} 
            key={user.id}>
            <h1>{user.name}</h1>
            <hr />
            <p>{user.teamName}</p>
            <hr />
            <div className="price">
              <div className="front">
                <span className="price">{user.salary} <b>$</b></span>
              </div>
            </div>
        </div>
    )}
    </div>
);