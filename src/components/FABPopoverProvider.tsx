import React, { createContext, FC, ReactNode, useContext, useRef, useState } from 'react';


// const [isCreateMenuActive, setIsCreateMenuActive] = useState(false);
type FABPopoverContextValue = {
    isCreateMenuActive: boolean;
    setIsCreateMenuActive: (value: boolean) => void;
};

const FABPopoverContext = createContext<FABPopoverContextValue>({
    isCreateMenuActive: false,
    setIsCreateMenuActive: () => {},
});

type FABPopoverProviderProps = {
    children: ReactNode;
};

const FABPopoverProvider: FC<FABPopoverProviderProps> = ({children}) => {
    const [isCreateMenuActive, setIsCreateMenuActive] = useState(false);

    return (
        <FABPopoverContext.Provider value={{isCreateMenuActive, setIsCreateMenuActive}}>
            {children}
        </FABPopoverContext.Provider>
    );
};

export default FABPopoverProvider;

export {FABPopoverContext};





