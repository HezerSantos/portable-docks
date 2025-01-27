import { useEffect, useState } from "react";
import fetchCategoryComponent from "./FetchCategoryComponent";
import ProductCard from "./ProductCard.jsx";

import './assets/styles/ShoppingCategory.css'


const fetchElectronics = async (setElectronicData) => {
    const electronicData = await fetchCategoryComponent('electronics')
    setElectronicData(electronicData)
}


const Electronics = () => {
    const [electronicData, setElectronicData] = useState([])
    useEffect(() => {
        fetchElectronics(setElectronicData)
    }, [])
    return (
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
    )
}

export default Electronics;