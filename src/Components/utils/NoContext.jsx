import React from "react";
import { FavsContext } from "../../Context/ContextFavs";

export const NoContext = () => {
    const contextValue = React.useContext(FavsContext)
    console.log(contextValue);
    return (
        <div>
            <h1>No Context</h1>
        </div>
    )
}