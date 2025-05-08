import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./Footer"
// import ImageCarousel from "./ImageCarousel"
import Navbar from "./Navbar"

const GetProducts = () => {
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [product, setProduct] = useState([])
  // img url
  const img_url = "https://wanjikugichuhi.pythonanywhere.com/static/images/"
  // function to fetch data from api
  const getproducts = async () => {
    setLoading("please wait...")
    try {
      const response = await axios.get("https://wanjikugichuhi.pythonanywhere.com/api/get_product_details")
      setLoading("")
      setError("")
      setProduct(response.data)
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }
  useEffect(() => { getproducts() }, [])

  // Filtered products based on search
  const [search, setSearch] = useState("")
  const filtered_products = product.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <div className="row justify-content-center mt-3 mb-3">
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row container-fluid mt-3">
        <Navbar />
        {/* <ImageCarousel /> */}
        <span className="text-info">{loading}</span>
        <span className="text-danger">{error}</span>
        <h3>Available products</h3>
        {filtered_products.map((product) => (
          <div className="col-md-3 justify-content-center mb-4" key={product.id}>
            <div className="card shadow text-center">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <button className="btn btn-dark">Make payment</button>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <Footer />
      </div>
    </>
  )
}

export default GetProducts
