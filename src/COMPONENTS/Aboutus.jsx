import react from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"




const Aboutus = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='display-4 text-danger'>About Us</h1>
 
        <div className="col-md-4 justify-content-start">
            
            
<p>Fit_Calda a brand ready to work with you as you work on yourself. We sell sports bras,leggings,shorts,tights,tank tops,crop tops,jackets,hoodies,shoes,waisttrainers ,sweet belts ,lifting belts and accesssories like head bands and caps. we promise and we deliver</p>

<p>we fully understand that it can be extremely difficult and overwhelming to pick gym outfits mainly as a lady. you want color,beauty and the most important of all comfort.here at Fit_Calda we we provide that and more. </p>
 

            <h3 className='text-primary'>Fit_calda by Wanjiku Gichuhi</h3>
            <Footer/>
        
 

           
        </div>
        
    </div>
  )
}
 

export default Aboutus