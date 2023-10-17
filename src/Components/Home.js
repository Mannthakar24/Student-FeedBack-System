import React from 'react'
import CreateImg from '../Imgs/popular-01.jpg'
import UpdateImg from '../Imgs/popular-02.jpg'
import DeleteImg from '../Imgs/popular-03.jpg'
import ViewImg from '../Imgs/popular-04.jpg'
import { Link } from 'react-router-dom'
import Header from './Header'

export const Home = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div className="container">
                    <div className="row d-flex flex-row justify-content-center">

                        <div className="col col-11">
                            <div className="box">
                                <div className="banner">
                                    <div className="header-text">

                                        <h6>Welcome To FeedBack</h6>

                                        <h4><em>Give</em>
                                            Your Valuable FeedBack</h4>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row d-flex flex-row justify-content-center align-items-center">

                        <div className="col col-lg-11 col-md col-sm-9 col-8 sec">
                            <div className="row temp">
                                <div className="heading-section">
                                    <h4><em>Most Popular</em> Right Now</h4>
                                </div>
                                <div className="col col-lg">
                                    <div className="item">
                                        <img src={CreateImg} alt="" />
                                        <Link to={"/create"}>  <h4>Create<br /><span>Review</span></h4></Link>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-lg">
                                    <div className="item">
                                        <img src={UpdateImg} alt="" />
                                        <Link to={"/read"}> <h4>View<br /><span>Review</span></h4></Link>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-lg">
                                    <div className="item">
                                        <img src={DeleteImg} alt="" />
                                        <h4>Delete<br /><span>Review</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-lg">
                                    <div className="item">
                                        <img src={ViewImg} alt="" />
                                        <Link to={"/update"}> <h4>Update<br /><span>Review</span></h4></Link>
                                        <ul>
                                            <li><i className="fa fa-star"></i> 4.8</li>
                                            <li><i className="fa fa-download"></i> 2.3M</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Home