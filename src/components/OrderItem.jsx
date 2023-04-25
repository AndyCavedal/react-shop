import React from 'react';
import '../styles/OrderItem.scss';
import addedToCart from '@icons/bt_add_to_cart.svg'


const OrderItem = () => {
    // const [cart, setCart] = useState('');
    
    // const handleClick = () => {
    //     setCart('Hola Mundo')
    // }
    return (
        <section className="main-container">
            <div className="cards-container">
                <div className="product-card">
                    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt />
                    <div className="product-info">
                        <div>
                            <p>$120,00</p>
                            <p>Bike</p>
                        </div>
                        <figure>
                            <img src={addedToCart} alt />
                        </figure>
                    </div>
                </div>
            </div></section>
    )
}

export default OrderItem;