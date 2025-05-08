import React from "react";

const Footer = () => {
return (
<footer>
<section className="row footer-section">
{/* Contact Us */}
<div className="col-md-4">
<h4 className="footer-heading text-white">Contact Us</h4>
<form>
<input
type="email"
placeholder="Enter your email"
className="form-control"
/>
<br />
<br />
<textarea
name=""
id=""
placeholder="Leave a comment"
className="form-control"
rows="7"
></textarea>
<br />
<input
type="submit"
className="btn btn-outline-danger"
value="Send message"
/>
</form>
</div>

{/* Stay Connected */}
<div className="col-md-4">
<h4 className="footer-heading text-white">Stay Connected</h4>
<div className="footer-social-links">
<a href="https://www.facebook.com/">
<img src="images.jsx" alt="Facebook" />
</a>

<a href="https://www.instagram.com/">
<img src="images/in.png" alt="Instagram" />
</a>

<a href="https://x.com/">
<img src="images.jsx/x.png" alt="X" />
</a>
</div>
 

<p className="footer-text">
You can reach out to us through our social media handles
</p>
</div>

<div className="col-md-4 text-white">
<h4 className="footer-heading ">About Us</h4>
<h5>Welcome to Fit_Calda</h5>
{/* <p>Fit_Calda a brand ready to work with you as you work on yourself. We sell sports bras,leggings,shorts,tights,tank tops,crop tops,jackets,hoodies,shoes,waisttrainers ,sweet belts ,lifting belts and accesssories like head bands and caps. we promise and we deliver</p> */}

{/* <p>we fully understand that it can be extremely difficult and overwhelming to pick gym outfits mainly as a lady. you want color,beauty and the most important of all comfort.here at Fit_Calda we we provide that and more. We provide class,elegant,sporty,girly,masculine and anything you would desire. </p> */}

<p>We appreciate you for choosing us and we promise to provide the best</p>
<p>All are welcome</p>
 

</div>
 

</section>

{/* Developer Section */}
<div className="footer-bottom">
<p>
Developed by Ricalda Gichuhi &copy; 2024. All rights reserved
</p>
</div>
</footer>
)
}

export default Footer