import { fetchProducts } from '../../../services/apiService'



export const productBySlug = async ( {slug} ) => {
    try {
        const productsList = await fetchProducts()
        const productSlug = productsList.filter(product => slug === product.slug)
        return productSlug[0]
    } catch (error) {
        console.error('Error fetching products', error)
        return []
    }
    
}