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