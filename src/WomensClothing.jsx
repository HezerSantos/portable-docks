import { useEffect, useState } from "react";
import fetchCategoryComponent from "./FetchCategoryComponent.jsx";
import ProductCard from "./ProductCard.jsx";
import LoadingScreen from "./Loading.jsx";

import './assets/styles/ShoppingCategory.css'


const fetchWomenC = async (setWomenC, setIsLoading) => {
    const womenCData = await fetchCategoryComponent("women's clothing")
    setWomenC(womenCData)
    setIsLoading(false)
}


const WomenC = () => {
    const [womenCData, setWomenC] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        fetchWomenC(setWomenC, setIsLoading)
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
                    {womenCData.map(product => {
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

export default WomenC;