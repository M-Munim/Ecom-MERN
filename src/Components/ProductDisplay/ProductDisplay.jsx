import React from 'react'
import starIcon from "../Assets/star_icon.png"
import starDullIcon from "../Assets/star_dull_icon.png"

import './productDisplay.scss'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productDisplay'>
            <div className="productLeft">
                <div className="productImgList">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="productImg">
                    <img src={product.image} alt="" className="productMainImg" />
                </div>
            </div>

            <div className="productRight">
                <h1>{product.name}</h1>
                <div className="productRightStars">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productRightPrices">
                    <div className="productRightPriceOld">
                        ${product.old_price}
                    </div>

                    <div className="productRightPriceNew">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productRightDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatem dignissimos ducimus numquam qui quos minima distinctio molestias voluptas eligendi!
                </div>

                <div className="productRightSize">
                    <h1>Select Size</h1>
                    <div className="productRightSizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>

                <p className="productRightCategory">
                    <span>Category :<span>Women, T-Shirt, Crop Top</span></span>
                </p>

                <p className="productRightCategory">
                    <span>Tags :<span>Modern, Latest</span></span>
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay