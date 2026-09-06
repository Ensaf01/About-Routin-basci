import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {name,website}=user;
    const styles = {
        border:'2px solid green',
        padding:'10px',
        gap:'10px'
    }
    const nagi=useNavigate();
    const handleGoBack=()=>{
        nagi (-1); // 1 step back
    }
    return (
        <div style={styles}>
            <h1>User name:{name}</h1>
            <h2>website: {website}</h2>
            <button onClick={handleGoBack}>GoBack</button>
        </div>
    );
};

export default UserDetails;