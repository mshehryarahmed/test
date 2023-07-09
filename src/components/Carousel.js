import React from 'react';
import Rajesh from '../assets/Rajesh.jpeg';
import Alberto from '../assets/Alberto.jpg';
import './Reviews.css';
import Ratings from './Ratings';

const Carousel = () => {
    return (
        <div className='Carousel'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-container">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className=" container container-content">
                            <img src={Rajesh} className="round" alt="Rajesh Gopinathan" />
                            <p className='heading'>
                                Rajesh Gopinathan
                                <span className='sub-heading'>
                                    CEO TCS
                                </span>
                            </p>
                            <p className='content text-center'>
                                <q>
                                    I highly recommend this Logistics company for their exceptional service and unparalleled expertise in handling complex logistics operations. Their dedication, professionalism, and attention to detail make them a trusted partner for seamless transportation and supply chain solutions.
                                </q>
                            </p>
                            <Ratings rating={5} />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className=" container container-content">
                            <img src={Alberto} className="round" alt="Alberto Nobis" />
                            <p className='heading'>
                                Alberto Nobis
                                <span className='sub-heading'>
                                    CEO DHL
                                </span>
                            </p>
                            <p className='content text-center'>
                                <q>
                                    I endorse this Logistics company for their exceptional performance and unwavering commitment to delivering top-notch logistics services. Their innovative solutions and reliability make them an invaluable global supply chain partner.
                                </q>
                            </p>
                            <Ratings rating={5} />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel