import { createContext, useState } from "react";

export const AuthContent = createContext(null)

export const ListproductsContext = createContext();

// Создание провайдера контекста
export const ListproductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return (
        <ListproductsContext.Provider value={[products, setProducts]}>
            {children}
        </ListproductsContext.Provider>
    );
};