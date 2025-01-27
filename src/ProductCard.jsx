import { useEffect, useState, React } from 'react'
import './assets/styles/ProductCard.css'
import { useOutletContext } from 'react-router-dom'

const addQuantity = (setProductQuantity) => {
    setProductQuantity(prevQuant => prevQuant + 1)
}

const removeQuantity = (setProductQuantity) => {
    setProductQuantity(prevQuant => {
        return prevQuant === 0 ? 0 : prevQuant - 1
    })
}

const updateShoppingCart = (id, quantity, price, setShoppingCart, image, title) => {
    if (quantity === 0){
        return
    }
    setShoppingCart(prevShoppingCart => {
        if (prevShoppingCart.has(id)){
            const newShoppingCart = new Map(prevShoppingCart)
            const product = newShoppingCart.get(id)
            product.quantity += quantity
            return newShoppingCart
        } else {
            const newShoppingCart = new Map(prevShoppingCart)
            newShoppingCart.set(id, {"title": title, "quantity": quantity, "price": price, "image": image})
            return newShoppingCart
        }
    })
}



const ProductCard = ({title, price, description, image, rating, id}) => {
    const [productQuantity, setProductQuantity] = useState(0)
    // const {shoppingCart, updateShoppingCart} = useShoppingCart()
    const shop = useOutletContext();
    
    const handleQuantityChange = (event) => {
        let quantity = parseInt(event.target.value, 10)
        console.log(quantity)
        if (isNaN(quantity)){
            quantity = 0
        }
        setProductQuantity(quantity)
    }

    const handleAddButton = () => {
        updateShoppingCart(id, productQuantity, price, shop.set, image, title)
        setProductQuantity(0)
    }
    return (
        <div className='product-card'>
            <div className='product-image'>
                <img src={image} alt={title} />
            </div>
            <div className='product-card-info'>
                <p className='product-title'>{title}</p>
                <p>Price: {price}$</p>
                <div className='button-container'>
                    <div className='modify-size'>
                        <button onClick={() => removeQuantity(setProductQuantity)}>-</button>
                        <input 
                            type="text" 
                            value={productQuantity}
                            onChange={handleQuantityChange}
                        />
                        <button onClick={() => addQuantity(setProductQuantity)}>+</button>
                    </div>
                    <button 
                        className='add-button' 
                        onClick={() => handleAddButton()}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
