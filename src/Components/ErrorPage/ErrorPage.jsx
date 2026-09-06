import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const eror=useRouteError() // hook use means hooks
    return (
        <div>
            <h1>Ooooop!! </h1>
            <p>
                {eror.statusText || eror.message}
            </p>
            {
                eror.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>go back where you from</p>
                    <Link to='/'>Go Back Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;