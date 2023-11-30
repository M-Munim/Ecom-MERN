import React from 'react'
import "./NewsLetter.scss"

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get exclusive offers on your email</h1>
            <p>subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" id="" placeholder='Your Email Id ' />
                <button>subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter