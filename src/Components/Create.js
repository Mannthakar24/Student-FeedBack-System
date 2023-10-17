import React from 'react'
import { useState } from 'react'
import axios from "axios";
import './style1.css';
import {useNavigate } from 'react-router-dom';
import Header from './Header'
const Create = () => {
    
    const [name, setName] = useState()
    const [review, setreview] = useState()
    const history = useNavigate()
    const CreateData = (e) =>
    {
        e.preventDefault()
        axios.post("https://6405517eeed195a99f8006e0.mockapi.io/Country",
        {
            Name:name,
            Review:review

        }).then(()=>{
                history("/read")
                setName("")
                setreview("")
        })
    }


    return (
        <>
        <Header/>
        <div className='main'>
            <div class="Form d-flex flex-column align-items-center ">
                <form class="form">
                    <p class="form-title">Write A Review</p>
                    <div class="input-container">
                        <input placeholder="Enter Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div class="input-container">
                        <textarea cols="38" rows="10" placeholder="Your Thoughts..." value={review} onChange={(e) => setreview(e.target.value)}></textarea>


                    </div>
                    <button class="submit" type="submit" onClick={CreateData}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Create