import { useLoaderData } from "react-router-dom";
import User from "../User/user";
import '../Users/Users.css'
const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            <h1>User length :{users.length}</h1>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;