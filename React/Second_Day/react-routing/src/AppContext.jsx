import React, {createContext} from 'react';

export const AppContext = createContext();


export const AppProvide = ({children}) => {
    const projectTitle = 'React Routing Project';

    return (
        <AppContext.Provider value={{projectTitle}}>
            {children}
        </AppContext.Provider>
    );
};