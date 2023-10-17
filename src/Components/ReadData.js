import React from 'react'
import Read from './Read'
import axios from "axios"
import { useState, useEffect } from 'react'
import Header from './Header'
const ReadData = () => {

    const [data, setData] = useState()

     const getData = () => {
        axios.get("https://6405517eeed195a99f8006e0.mockapi.io/Country").then((res) => {
            console.log(res.data);
            setData(res.data);
        })
    }

    useEffect(() => {
        getData();

    }, []);


    return (

        <div class="divMain">
            <Header/>
            <div className='CardList'>
            {data?.map((val) => {
                return (
                    <>

                        <Read name={val.Name} reviews={val.Review} ids={val.id} key={val.id} />

                    </>
                )
            })}
            </div>
        </div>
    )
}

export default ReadData