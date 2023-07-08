import React from 'react'
import review from '../assets/reviews.jpeg'
import './Reviews.css'
const Carousel = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade carousel-container">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className=" container container-content">
                            <img src={review} className="round" alt="review"/>
                            <p className='heading'>
                                Amanda
                            </p>
                            <p className='sub-heading'>
                                officer
                            </p>
                            <p className='content text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusamus hic vel libero beatae eius molestiae assumenda eaque, commodi, totam nobis quis. Dolorum facere dignissimos, deleniti possimus accusantium obcaecati.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className=" container container-content">
                            <img src={review} className="round" alt="review"/>
                            <p className='heading'>
                                lorem
                            </p>
                            <p className='sub-heading'>
                                officer
                            </p>
                            <p className='content text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusamus hic vel libero beatae eius molestiae assumenda eaque, commodi, totam nobis quis. Dolorum facere dignissimos, deleniti possimus accusantium obcaecati.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className=" container container-content">
                            <img src={review} className="round" alt="review"/>
                            <p className='heading'>
                                epsom
                            </p>
                            <p className='sub-heading'>
                                officer
                            </p>
                            <p className='content text-center'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor accusamus hic vel libero beatae eius molestiae assumenda eaque, commodi, totam nobis quis. Dolorum facere dignissimos, deleniti possimus accusantium obcaecati.
                            </p>
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
        </>
    )
}

export default Carousel