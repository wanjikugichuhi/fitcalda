import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-2">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Fit_<span className="text-danger">Calda</span>
        </Link>

       

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">See Fits</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/Add fits" className="nav-link">Add Fits</Link></b>
            </li>
            <br />
           
          </ul>
         

          {/* Authorization Links (Aligned Right) */}

          <ul className="navbar-nav ms-auto">
            <br />
                <li className="nav-item">
                  <b><Link to="/aboutus" className="btn btn-dark">About us</Link></b>
                </li>
                <br />
            <li className="nav-item">
              <Link to="/signin" className="btn btn-dark me-2">Sign In</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/signup" className="btn btn-dark">Sign Up</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/getproducts" className="btn btn-dark"> Get Fits</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/addproducts" className="btn btn-dark"> Add Fits</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/makepayment" className="btn btn-dark"> Make payment</Link>
            </li>
            <br />

            <li className="nav-item">
              <Link to="/benefits" className="btn btn-dark"> Benefits</Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/chatbot" className="btn btn-dark">Flawless Helper</Link>
            </li>
          </ul>
        </div>
     
    </nav>
  );
};

export default Navbar;