import React, { createContext } from "react";
import all_products from "../Components/Assets/all_product"

// created context and initialized with null
export const ShopContext = createContext(null);


const ShopContextprovider = (props) => {

    const contextValue = { all_products };

    return (
        // returnig shopContext val from shopContextProvider
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextprovider;
