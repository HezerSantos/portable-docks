const fetchCategoryComponent = async(category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const parsedResponse = await response.json()
    console.log(parsedResponse)
    return parsedResponse
}


export default fetchCategoryComponent