export const sortArrByDateAsc = (a, b) => {
    const dateA = new Date(a.dateAdded)
    const dateB = new Date(b.dateAdded)

    return dateA - dateB
}

export const sortArrByDateADesc = (a, b) => {
    const dateA = new Date(a.dateAdded)
    const dateB = new Date(b.dateAdded)
    
    return dateB - dateA
}