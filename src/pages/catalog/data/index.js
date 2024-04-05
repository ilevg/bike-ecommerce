const getProductFilters = async (productsList, attributeName) => {
  const productsBrand = productsList.map(product => {
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

const getCategories = (productsList) => {
    const categories = productsList.flatMap(product => {
    const subCategory = product.categories[1]?.name;

    return [subCategory].filter(Boolean)
  })
  return Array.from(new Set(categories))
}

const maxPrice = (productsList) => {
  let allPrices = []

  productsList.map(product => {
    allPrices.push(product.price)
  })

  return [Math.max(...allPrices)]
}

export const itemsForFilterField = async (productsList) => {
  const productCategories = getCategories(productsList)
  const productPriceValues = maxPrice(productsList)
  const productBrands = await getProductFilters(productsList, 'Brand')
  const productCountry = await getProductFilters(productsList, 'Country')
  const productYear = await getProductFilters(productsList, 'Year')

  return [
    {
      title: 'Bicycles Types',
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
}