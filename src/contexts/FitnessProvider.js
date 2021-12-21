import React, { createContext, useContext, useState } from 'react';

const FitnessContext = createContext();

export const useDelivery = () => {
    return useContext(FitnessContext);
}
const FitnessProvider = ({ children }) => {
    // const [quantity, setQuantity] = useState(1)
    const [input, setInput] = useState({})
    const [disabled, setDisabled] = useState(true)

    const value = {
        input,
        disabled,
        setInput,
        setDisabled,
    }
    return (
        <FitnessContext.Provider value={value}>
            {children}
        </FitnessContext.Provider>
    )
}

export default FitnessProvider
