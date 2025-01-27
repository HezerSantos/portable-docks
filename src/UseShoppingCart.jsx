import { useState, useEffect } from "react"


const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState(new Map())
    useEffect(() => {
        console.log(shoppingCart)
    }, [shoppingCart])
    const updateShoppingCart = (id, quantity, price) => {
        if (quantity === 0){
            return
        }
        if (shoppingCart.has(id)){
            setShoppingCart(prevShoppingCart => {
                const newShoppingCart = new Map(prevShoppingCart)
                const product = newShoppingCart.get(id)
                const updatedQuantity = product.quantity + quantity
                newShoppingCart.delete(id)
                newShoppingCart.set(id, {"quantity": updatedQuantity, "price": price})
                return newShoppingCart
                
            })
        } else {
            setShoppingCart(prevShoppingCart => {
                const newShoppingCart = new Map(prevShoppingCart)
                newShoppingCart.set(id, {"quantity": quantity, "price": price})
                return newShoppingCart
            })
        }
    }

    return {
        shoppingCart,
        updateShoppingCart,
    }
}

export default useShoppingCart