import { useLoaderData } from "react-router-dom";

const Users = () => {
    const user =useLoaderData();
    return (
        <div>
            <h1>User length :{user.length}</h1>
        </div>
    );
};

export default Users;