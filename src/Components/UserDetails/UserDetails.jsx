import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name,website}=user;
    return (
        <div>
            <h1>User name:{name}</h1>
        </div>
    );
};

export default UserDetails;