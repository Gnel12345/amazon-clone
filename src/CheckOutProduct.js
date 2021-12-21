import React from 'react'
import "./CheckOutProduct.css"


function CheckOutProduct(id, image, title,price,rating) {
    return (
        <div className='checkoutProduct'>
                <img className = "checkoutProduct_image"src={image}/>
                <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_, i )=>(
 <p>🌟</p>
                    ))}
                </div>
                <button>Remove From Basket</button>


                </div>
            
        </div>
    )
}

export default CheckOutProduct
