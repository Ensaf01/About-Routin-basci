import { Link } from "react-router-dom";


const User = ({ user }) => {
    console.log(user)
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '30px'
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



        </div>
    );
};

export default User;