import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
// import { Carousel } from "bootstrap"



const Signup=()=>{
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[password,setpassword]=useState('')
    const[loading,setLoading]=useState("")
    const[success,setsuccess]=useState("")
    const[error,seterror]=useState("")
    const navigation=useNavigate()
    // Fuction to handle our submition
    const submit=async(e)=>{
        // is to prevent the page from reloading once submit has been clicked
        e.preventDefault()
        // we update our loading hook for user to see the data is being uploaded
        setLoading("Please wait as your data gets uploaded")
        
        // try and catch incase there is an error during formdata submission
        try {
            
            
            // we are creating form data object to carry our updated hook
            const data=new FormData()
            // we append our values to  our object form
            data.append("username", username)
            data.append("email", email)
            data.append("phone", phone)
            data.append("password", password)
            
            // send our data using axios
            // axios is able to use request method such as post, get, put,patch etc
            
            const response=await axios.post("https://wanjikugichuhi.pythonanywhere.com/api/signup",data)
            setLoading("")
            seterror("")
            setsuccess(response.data.message)
            // clear hooks when the signup is a success
            setUsername("")
            setEmail("")
            setPhone("")
            setpassword("")
            setsuccess("")

            setTimeout(()=>navigation("/signin",3000))
        // Catching the error and making it not to be seen by the user as a block of texts. instead he can see only a line of texts 
        } catch (error) {
            setLoading("")
            seterror(error.message)
            
        }
        
        
    }
    return(
        <div className="container-fluid d-flex row justify-content-center mt-4">
            <Navbar />
            {/* <Carousel/> */}
            <div className="col-md-6 card shadow p-4 text-center">
           
            <hr />
                <h2>Sign up</h2>
                {/* when the form is submitted [onSubmit], it invokes the submit function  */}
                <form onSubmit={submit}>
                    {loading && <div className="alert alert-info">{loading}</div>}
                    {success && <div className="alert alert-success">{success}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <input type="text" className="form-control"  placeholder="Enter Username" required value={username} onChange={(e)=>setUsername(e.target.value)}/> 
                    <br/>
                    <input type="email" className="form-control" placeholder="Enter your email" required  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <input type="tel" className="form-control" placeholder="Enter your phone number" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <br />
                    <input type="password" className="form-control" placeholder="Enter your password" required  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <br /> 
                    <button type="submit" className="btn btn-primary">Sign up</button>
                <p className="text-center">Already have an account? <Link to= {'/Signin'}>Sign in</Link></p>
                </form>
            <hr />
        <Footer/>
                
            </div>

        </div>
    )
}
export default Signup