import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'


const OrderItem = ({ product }) => {
    // const [cart, setCart] = useState('');
    
    // const handleClick = () => {
    //     setCart('Hola Mundo')
    // }
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
                            <img src={close} alt="" />
                        </figure>
                    </div>
            </div>
    )
}

export default OrderItem;