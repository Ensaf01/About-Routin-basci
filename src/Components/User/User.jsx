import { Link, useNavigate } from "react-router-dom";


const User = ({ user }) => {
    console.log(user)
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '30px'
    }
    const naviage= useNavigate();
    
    const showmorebutton=() =>{
        naviage(`/user/${id}`)
    }
    return (
        <div style={userStyle}>

            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>ShowDetails</Link>

            {/* <Link to={`/user/${id}`}>
                <button>ShowDetails</button>
            </Link> */}
            <button onClick={showmorebutton}> Show More button </button>

        </div>
    );
};

export default User;