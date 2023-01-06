import React from 'react'

export default function Home() {
  return (
    <>
    <div className="container mt-md-5">
        <div className="row pt-md-5">
            <div className="col-md-6 p-5">
                <h1 style={{color:"#596AFF"}}>Leading MEP & Facility management company in Dubai</h1>
                <h5 className='mt-3'>Urban Science is always ready to accept your challenges Meeting your goals is our main objective. Professional services for facility management & MEP works.</h5>
                <button className='p-3 mt-3' style={{backgroundColor:"#596AFF", color:"white", border:"2px solid white",borderRadius:"25px"}}>Company Profile</button>
            </div>
            <div className="col-md-6">
                <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" style={{width:"100%"}} />
            </div>
        </div>
    </div>
    </>
  )
}
