import { useEffect, useState } from "react";
import fetchCategoryComponent from "./FetchCategoryComponent.jsx";
import ProductCard from "./ProductCard.jsx";
import LoadingScreen from "./Loading.jsx";

import './assets/styles/ShoppingCategory.css'


const fetchjewelery = async (setJeweleryData, setIsLoading) => {
    const jeweleryData = await fetchCategoryComponent('jewelery')
    setJeweleryData(jeweleryData)
    setIsLoading(false)
}


const Jewelery = () => {
    const [jeweleryData, setJeweleryData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchjewelery(setJeweleryData, setIsLoading)
    }, [])
    return (
        <>
            { isLoading && (
                <section className="loading-section">
                    <LoadingScreen/>
                </section>
            )}
            {!isLoading && (
                <section className="shopping-grid">
                    {jeweleryData.map(product => {
                        return (
                            <ProductCard 
                                key = {product.id}
                                title = {product.title} 
                                image = {product.image}
                                description={product.description}
                                price={product.price}
                                id = {product.id}
                            />
                        )
                    })}
                </section>
            )}
        </>

    )
}

export default Jewelery;