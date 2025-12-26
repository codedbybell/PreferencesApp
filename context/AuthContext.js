import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (e) {
                console.error("Hafıza okunurken hata oldu:", e);
            } finally {
                setIsLoading(false);
            }
        };
        loadUser();
    }, []);

    useEffect(() => {
        const saveUser = async () => {
            if (user) {
                await AsyncStorage.setItem('user', JSON.stringify(user));
            } else if (!isLoading) {
                await AsyncStorage.removeItem('user');
            }
        };
        saveUser();
    }, [user, isLoading]);

    const login = (username) => {
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
}