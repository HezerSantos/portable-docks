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
                <div>Price: ${price} Quantity: {quantity}</div>
            </div>
        </section>
    )
}

const ShoppingCart = () => {
    const shop = useOutletContext()
    const [isEmpty, setIsEmpty] = useState(true)
    const [totalPrice, setTotalPrice] = useState('')
    useEffect(() => {
        if(shop.state.size === 0){
            setIsEmpty(true)
        } else {
            setIsEmpty(false)
            let totalPrice = 0
            shop.state.forEach((value) => {
                totalPrice += value.quantity * value.price
            })
            setTotalPrice(`$${totalPrice}`)
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
                <section className="proceed-to-checkout">
                    <h1>Total: {totalPrice}</h1>
                    <button>Proceed to Checkout</button>
                </section>
            </section>
        )}

        </>
    )
}

export default ShoppingCart