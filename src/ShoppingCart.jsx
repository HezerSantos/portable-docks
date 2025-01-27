import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import './assets/styles/ShoppingCart.css'

const CartItem = ({title, image, price, quantity}) => {
    return (
        <section className="cart-item">
            <div className="product-image-container">
                <img src={image} alt="" />
            </div>
            <div className="product-info">
                <h1>{title}</h1>
                <div>Price: {price} Quantity: {quantity}</div>
            </div>
        </section>
    )
}

const ShoppingCart = () => {
    const shop = useOutletContext()
    const [isEmpty, setIsEmpty] = useState(true)
    useEffect(() => {
        if(shop.state.size === 0){
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
        }
      }, [shop.state])

    return (
        <>
        { isEmpty && (
            <section className="shopping-cart-container">
                <h1>Shopping Cart is Empty</h1>
            </section>
        )}
        { !isEmpty && (   
            <section className="shopping-cart-container">
                {[...shop.state].map(([id, product]) => {
                        return(
                        <CartItem 
                                key={id}
                                title={product['title']}
                                image={product['image']}
                                price={product['price']}
                                quantity={product['quantity']}
                        />
                        )
                })}
            </section>
        )}

        </>
    )
}

export default ShoppingCart