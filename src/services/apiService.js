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

export const fetchBikes = () => fetchData('/bicycles')
export const fetchBikeAccessories = () => fetchData('/bikeAccessories')
export const fetchBikeParts = () => fetchData('/bikeparts')
export const fetchNavLinks = () => fetchData('/navLinks')
export const fetchContactQuestions = () => fetchData('/contactQuestions')
export const fetchPayInfo = () => fetchData('/payInfo')
export const fetchDeliveryInfo = () => fetchData('/deliveryInfo')