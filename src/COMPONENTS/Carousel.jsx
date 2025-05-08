import { Link } from "react-router-dom"


const ImageCarousel = () => {
return (
<section className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="i" alt="athletic women" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="https://www.lummi.ai/photo/fitness-club-people-in-sneakers-on-street-in-the-styl-0de25d43-96b5-479c-b50f-5a740fb10a55-Qo6By" alt="" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="" alt="" className="d-block w-100" height="300px"/>
                </div>

                <div className="carousel-item">
                <img src="public/images" alt="" className="d-block w-100" height="300px"/>
                </div>
            </div>

        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </Link >


        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </Link >

       
        </div>
    </div>
    <div className="col-md-1"></div>
</section>
)
}
export default ImageCarousel;
