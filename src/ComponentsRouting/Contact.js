import React from 'react'

export default function Contact() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"><strong>Name</strong></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"><strong>Email</strong></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"><strong>Country</strong></label>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>India</option>
                    <option value="1">UAE</option>
                    <option value="2">England</option>
                    <option value="3">etc</option>
                </select>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"><strong>Contact Number</strong></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"><strong>Expected date</strong></label>
                    <input type="date" className="form-control" id="exampleFormControlInput1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"><strong>Message</strong></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='btn btn-primary btn-md mb-5'>Submit</button>
            </div>
        </div>
    </div>
  )
}
