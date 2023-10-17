import React, { useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Update = () => {

  const [id, setId] = useState();
  const [names, setNames] = useState();
  const [review, setReview] = useState();
  const history  = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setNames(localStorage.getItem("name"));
    setReview(localStorage.getItem("reviews"));

  }, []);

  function handleUpdate(e)
  {
    e.preventDefault();
    axios.put(`https://6405517eeed195a99f8006e0.mockapi.io/Country/${id}`,
    {
      Name : names,
      Review:review

    }).then(()=>{
      history("/read")
    });
  }

  return (
    <>
      <Header />
      <div className='main'>
        <div className="Form d-flex flex-column align-items-center ">
          <form className="form">
            <p className="form-title">Update The Review</p>
            <div className="input-container">
              <input placeholder="Enter Name" type="text" value={names} onChange={(e) => {
                setNames(e.target.value)
              }} />

            </div>
            <div className="input-container">
              <textarea cols="38" rows="10" placeholder="Your Thoughts..." value={review} onChange={(e) => {
                setReview(e.target.value)
              }}></textarea>


            </div>
            <button className="submit" type="submit" onClick={handleUpdate}>
              Update
            </button>

            <p className="signup-link">

              No account?
              <a href="">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </>



  )
}

export default Update