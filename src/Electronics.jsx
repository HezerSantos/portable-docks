import { useEffect, useState } from "react";
import fetchCategoryComponent from "./FetchCategoryComponent";
import ProductCard from "./ProductCard.jsx";

import './assets/styles/ShoppingCategory.css'
import LoadingScreen from "./Loading.jsx";


const fetchElectronics = async (setElectronicData, setIsLoading) => {
    const electronicData = await fetchCategoryComponent('electronics')
    setElectronicData(electronicData)
    setIsLoading(false)
    
}


const Electronics = () => {
    const [electronicData, setElectronicData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchElectronics(setElectronicData, setIsLoading)
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
                    {electronicData.map(product => {
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

export default Electronics;