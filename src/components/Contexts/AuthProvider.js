import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase/useFirebase';
 
//Create context for providing data to children
 export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;