import {Link} from "react-router-dom";


const PageNotFound=()=>{

    return(

        <div className=" container-fluid text-center">
        <h1 className="text-center bold bg-danger">404</h1>
        <p className="text-center">Oops! Page Not Found</p>
        <p className="text-center">The page you are looking for might have been reemoved or is temporarily unavailable</p>
        <button className="btn btn-primary p-3 m-2"> <Link to ={"/"}></Link>Go Home</button>
        </div>
    )

}
export default PageNotFound;