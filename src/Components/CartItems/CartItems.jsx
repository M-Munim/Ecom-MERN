import React, { useContext } from 'react'
import './CartItems.scss'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartItems'>
            <div className="cartItemsFormatMain">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartItemsFormat cartItemsFormatMain">
                                <img src={e.image} alt="" className='cartIconProductIcon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>

                                <button className='cartItemsQuantity'>
                                    {cartItems[e.id]}
                                </button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} alt="" onClick={() => { removeFromCart(e.id) }} className='cartItemsRemoveIcon' />
                            </div>
                        </div>
                    );
                }
                return null; // added to handle the case where the if condition is not met
            })}

            <div className="cartItemsDown">
                <div className="cartItemsTotal">
                    <h1>Cart Totals</h1>

                    <div>
                        <div className="cartItemsTotalItem">
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr />

                        <div className="cartItemsTotalItem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="cartItemsTotalItem">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                    </div>

                    <button>Proceed to check out</button>
                </div>

                <div className="cartItemsPromocode">
                    <p>If you have a promo code, Enter it here</p>

                    <div className="cartItemsPromoBox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
