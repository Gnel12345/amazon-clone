import React from 'react'
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import CheckOutProduct from './CheckOutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className="payment">
        <div className='payment_container'>
<h1>
    Checkout (<Link to = "/checkout">{basket?.length} items</Link>
  )
</h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Somewhere, CA</p>
                </div>

            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                   <h3>Review Items and Delivery</h3>

                </div>
                <div className='payment_items'>
                    {basket.map(item=>(
                        <CheckOutProduct
                        id={item.id}

                        title={item.title}
                        
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
                
                
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Payment