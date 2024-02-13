import { fetchData } from '../../../../../services/apiService'

const fetchBlogPosts = () => fetchData('/blogPosts')
export const blogPostsList = await fetchBlogPosts()

