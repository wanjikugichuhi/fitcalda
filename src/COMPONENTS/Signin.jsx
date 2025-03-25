import React, { useState } from "react"
import { Link } from "react-router-dom"


const Signin=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return(
    
        
        <div className=" container-fluid d-flex row justify-content-center mt-4">
            <div className="card shadow p-4 col-md-6 text-center">
            <nav className="mt-5 mb-2 me-3">
                <Link className="btn btn-secondary me-3" to={"/"}> Home</Link>
                <Link className="btn btn-dark me-3" to={"/addproducts"}>Add products</Link>
                <Link className="btn btn-dark me-3"to={"/signin"}>Sign In</Link>
                <Link className="btn btn-dark me-3"to={"/signup"}>Sign Up</Link>
                <Link className="btn btn-dark me-3" to={"/getproducts"}>Get Product</Link>
                
            </nav>
            <hr />
            
                <h2>Sign In</h2>
                <form>
                    <input type="email" placeholder="input email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <br />
                    <br />
                    <input type="password" placeholder="enter password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <br />
                    <br />
                    <button type="submit" className="btn btn-success">Sign In</button>
                </form>
                {/* <p>If you dont have an account you can just <Link to={'/signup'}>Sign Up</Link></p> */}

            </div>

        </div>
    )

}
export default Signin