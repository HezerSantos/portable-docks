import { useEffect, useState } from "react";
import fetchCategoryComponent from "./FetchCategoryComponent.jsx";
import ProductCard from "./ProductCard.jsx";
import LoadingScreen from "./Loading.jsx";

import './assets/styles/ShoppingCategory.css'


const fetchMenC = async (setMenC, setIsLoading) => {
    const menCData = await fetchCategoryComponent("men's clothing")
    setMenC(menCData)
    setIsLoading(false)
}


const MenC = () => {
    const [menCData, setMenC] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=> {
        fetchMenC(setMenC, setIsLoading)
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
                    {menCData.map(product => {
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

export default MenC;