import React from "react";

const UserInfo = ({ id, name, email, username, address, phone, setUsers }) => {
    return (
        <div className="card col-12 col-lx-4" style={{width:"18rem"}}>
            <div className="card-body" key={id}>
                <h5 className="card-title">{username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
                <p className="card-text">
                 aaa
                </p>
                <a href="#" className="card-link">
                    Card link
                </a>
                <a href="" className="card-link">
                    Another link
                </a>
            </div>
        </div>
    );
};

export default UserInfo;
