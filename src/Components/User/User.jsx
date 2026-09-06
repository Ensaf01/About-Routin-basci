

const User = ({user}) => {
    console.log(user)
    const {id,name,email,phone}=user;
    const userStyle ={
        border:'2px solid green',
        padding:'5px',
        borderRadius:'30px'
    }
    return (
        <div style={userStyle}>
            <p>{id}</p>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default User;