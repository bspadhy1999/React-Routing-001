import React from 'react'

export default function Banner() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide mb-4" data-bs-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="banner-img" src="https://images.indianexpress.com/2020/09/Untitled-design-56-2.jpg" style={{height:"400px"}} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img className="banner-img" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/10/flipkart-bbd-1601988038.jpg" style={{height:"400px"}} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img className="banner-img" src="https://i.gadgets360cdn.com/large/big-billion-days-2022-sale_1663819658737.png" style={{height:"400px"}} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}
