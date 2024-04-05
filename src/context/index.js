import { createContext, useEffect, useMemo, useState } from "react";
import { fetchProducts } from "../services/apiService";
import { fetchData } from '../services/apiService'

export const AuthContent = createContext(null)
export const ListproductsContext = createContext();
export const ListBlogPostContext = createContext();
export const SingleProductContext = createContext();
export const ActiveProfileTabContext = createContext([])
export const ActiveAuthComponentContext = createContext([])

export const ListproductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts()
            .then(prods => setProducts(prods))
    }, []);
    const memoizedProducts = useMemo(() => products, [products]);
    return (
        <ListproductsContext.Provider value={[memoizedProducts, setProducts]}>
            {children}
        </ListproductsContext.Provider>
    );
};

export const ListBlogPostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData('/wp-json/wp/v2/posts')
            .then(postList => setPosts(postList))
    }, []);
    const memoizedProducts = useMemo(() => posts, [posts]);
    return (
        <ListBlogPostContext.Provider value={[memoizedProducts, setPosts]}>
            {children}
        </ListBlogPostContext.Provider>
    );
};

export const SingleProductProvider = ({ children }) => {
    const [singleProduct, setSingleProduct] = useState({});
    return (
        <SingleProductContext.Provider value={[singleProduct, setSingleProduct]}>
            {children}
        </SingleProductContext.Provider>
    );
};

// active tab in profile page sidebar
export const ActiveProfileTabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('history')
    return (
        <ActiveProfileTabContext.Provider value={[activeTab, setActiveTab]}>
            {children}
        </ActiveProfileTabContext.Provider>
    )
}

export const ActiveAuthComponentProvider = ({ children }) => {
    const [activeAuthComponent, setActiveAuthComponent] = useState('login')
    return (
        <ActiveAuthComponentContext.Provider value={[activeAuthComponent, setActiveAuthComponent]}>
            {children}
        </ActiveAuthComponentContext.Provider>
    )
}