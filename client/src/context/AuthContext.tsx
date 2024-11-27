import { createContext, useContext, useState } from "react"

type AuthContextProps = {
    user: { email: string } | null,
    setUser: (user: { email: string }) => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ( {children} : {children: React.ReactNode}) => {
    const [user, setUser] = useState<{email : string} | null>(null)

    // const login = (userData) => { setUser(userData) }
    // const logout = () => { setUser(undefined) }

    return (
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };