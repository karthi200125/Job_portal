'use client'
const { createContext, useReducer, useEffect } = require("react");

const AuthContext = createContext();
const storedUser = localStorage.getItem('user');
const INITIAL_STATE = {
    user: JSON.parse(storedUser) || null
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
