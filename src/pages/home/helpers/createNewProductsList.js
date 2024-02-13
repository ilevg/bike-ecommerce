import { sortArrByDateADesc } from '../../../helpers/sortArr'
import { fetchBikes } from '../../../services/apiService'

const productsList = await fetchBikes()

export const newProductsList = productsList.slice(0, 8).sort(sortArrByDateADesc)
