import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const FullReview = () => {

    const [id, setId] = useState()
    const [name, setName] = useState();
    const [review, setReview] = useState();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setReview(localStorage.getItem("reviews"));
    })

    return (
        <>
            <Header />
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8 contain'>
                    <h3>{name}</h3>
                    <p>{review}</p>
                </div>
                <div className='col-1'></div>
            </div>
        </>
    )
}

export default FullReview