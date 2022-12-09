import React from 'react';
import user_icon from '../Component/userIcon/images.jpg'

function User(props) {
    return (
        <div>
            <img src={user_icon} width ={50}></img>
            <span>Users Icon</span>
        </div>
    )
}

export default User;