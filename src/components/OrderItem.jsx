import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'


const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    return (
            <div className="OrderItem">
                <figure>
                    <img src={product.images[0]} alt={product.title} />
                </figure>                    
                    <div className="product-info">
                        <div>
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>
                        <figure>
                            <img src={close} alt="close" onClick={() => handleRemove(product)}  />
                        </figure>
                    </div>
            </div>
    )
}

export default OrderItem;