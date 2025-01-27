import { useEffect, useState } from "react"
import useShoppingCart from "./UseShoppingCart"


const ShoppingCart = () => {
    const { shoppingCart } = useShoppingCart() 
    useEffect(() => {

        console.log("Shopping Cart Updated:", shoppingCart)
    }, [shoppingCart])

    return (
        <>
            
        </>
    )
}

export default ShoppingCart