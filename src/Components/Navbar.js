import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-section navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            <img className="img-logo ms-5" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/>
            <figcaption className="figc ms-5"><i className="ei">Explore </i><span><i className="pi fw-bold">Plus</i></span> <span className="plus-logo fw-bold"><i className="fa-solid fa-plus"></i></span></figcaption>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
          <div className="d-flex">
            <input type="text" placeholder="Search for product, brands and more"/>
            <div className="search-logo">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="loginbtn ms-5"><Link style={{textDecoration:"none"}} to="/signin">Login</Link></button>
          </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold ms-4" aria-current="page" href="/" style={{width:"150px"}}>Become a Seller</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active fw-bold dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item d-flex me-5">
                <a className="nav-link active fw-bold" aria-current="page" href="/" style={{width:"80px"}}>Cart <span className="ms-1"><i className="fa-solid fa-cart-shopping"></i></span></a>
              </li>
            </ul>
          </div>
      </nav>
    </>
  )
}
