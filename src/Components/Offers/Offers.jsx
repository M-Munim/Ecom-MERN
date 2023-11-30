import React from 'react'
import exclusiveImg from "../Assets/exclusive_image.png"
import "./offers.scss"

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive </h1>
                <h1>Offers For You</h1>
                <p>Only on best sellers products</p>
                <button>Check Now</button>
            </div>

            <div className="offers-right">
                <img src={exclusiveImg} alt="" />
            </div>


        </div>
    )
}

export default Offers