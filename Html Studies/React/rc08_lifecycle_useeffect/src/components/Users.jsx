import { useState, useEffect } from "react";
import UserInfo from "./UserInfo/UserInfo";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>USER LIST</h1>
            {/* <button className='btn btn-success' onClick={getUsers}>Get Users</button> */}
            <div className="row">
                {users.map((item) => {
                    const { id, name, email, username, address, phone } = item;
                    return (
                        <UserInfo
                            key={id}
                            name={name}
                            email={email}
                            username={username}
                            address={address}
                            phone={phone}
                            setUsers={setUsers}
                        />
                    );
                })}
                {/* <img src="" alt="" />
                    <h6>{users.name}</h6> */}
            </div>
        </div>
    );
};

export default Users;
