import axios from 'axios'
import axiosConfig from './axiosConfig'

export const fetchData = async (endpoint) => {
    try {
        const response = await axiosConfig.get(endpoint)
        return response.data
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error)
        throw error
    }
}

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/products')
        return response.data
    } catch (error) {
        console.error(`Error fetching data from http://localhost:4000/products`, error)
        throw error
    }
}

export const fetchNavLinks = () => fetchData('/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer')
export const fetchBlogPost = () => fetchData('/wp-json/wp/v2/posts')
















// ------------------------------------------------------------------------- //
export const fetchDataJsonPlace = async (endpoint) => {
    try {
        const response = await axios.get(`http://localhost:5000${endpoint}`)
        return response.data || []
    } catch (error) {
        console.error(`Error fetching data from http://localhost:5000${endpoint}`, error)
        throw error
    }
}


export const fetchBikes = () => fetchDataJsonPlace('/bicycles')
export const fetchBikeAccessories = () => fetchDataJsonPlace('/bikeAccessories')
export const fetchBikeParts = () => fetchDataJsonPlace('/bikeparts')
export const fetchContactQuestions = () => fetchDataJsonPlace('/contactQuestions')
export const fetchPayInfo = () => fetchDataJsonPlace('/payInfo')
export const fetchDeliveryInfo = () => fetchDataJsonPlace('/deliveryInfo')
export const fetchBlogPosts = () => fetchDataJsonPlace('/blogPosts')