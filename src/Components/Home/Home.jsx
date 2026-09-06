// import { Outlet } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../Hearder/Header';

const Home = () => {
    return (
        <div>
            <h1>i am from home</h1>
            <Header></Header>
            {/* oulet er upore ja ache sob fixed hisabe thakbe ,akhne oulet likhte perechi karon home modhe childer component ache*/}
            <Outlet></Outlet> 
            
        </div>
    );
};

export default Home;