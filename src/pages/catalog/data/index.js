import { fetchProducts } from '../../../services/apiService'

const productsForFilterField = await fetchProducts()

export const getProductFilters = async (attributeName) => {
    const productsBrand = productsForFilterField.map(product => {
        const findAttr = product.attributes.find(attr => attr.name === attributeName)
        const attrValue = findAttr && findAttr.options[0]

        return attrValue
    })

    const uniqueAttrValues = Array.from(new Set(productsBrand))

    const filteredAttrValues = uniqueAttrValues.map(value => {
        return {
            value: value,
            count: productsBrand.filter(item => item === value).length
        }
    })

    return filteredAttrValues
}

export const getCategories = () => {
    const categories = productsForFilterField.flatMap(product => {
        const mainCategory = product.categories[0]?.name;
        const subCategory = product.categories[1]?.name;

        return [mainCategory, subCategory].filter(Boolean)
    })
    return Array.from(new Set(categories))
}

export const maxPrice = () => {
    let allPrices = []

    productsForFilterField.map(product => {
        allPrices.push(product.price)
    })

    return [Math.max(...allPrices)]
} 

// Data

const productCategories = getCategories()
const productPriceValues = maxPrice()
const productBrands = await getProductFilters('Brand')
const productCountry = await getProductFilters('Country')
const productYear = await getProductFilters('Year')

export const itemsForFilterField = [
  {
    title: 'Products Categories',
    value: productCategories
  },
  {
    title: 'Brand',
    value: productBrands
  },
  {
    title: 'Price',
    value: productPriceValues
  },
  {
    title: 'Country',
    value: productCountry
  },
  {
    title: 'Year',
    value: productYear
  },
]