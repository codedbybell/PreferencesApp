import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1. Context'i oluşturuyoruz
const ThemeContext = createContext();

// 2. Provider: Temayı tüm uygulamaya sağlayan kapsayıcı
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    // Uygulama açılınca hafızadan oku
    useEffect(() => {
        AsyncStorage.getItem('theme').then(stored => {
            if (stored) setTheme(stored);
        });
    }, []);

    // Temayı değiştir ve kaydet
    const toggleTheme = async () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        await AsyncStorage.setItem('theme', next);
    };

    // Renk Paletleri
    const colors = theme === 'light' ? {
        background: '#FAF3F0',
        text: '#5F4B4B',
        primary: '#9CA986',
        accent: '#EBC7E6',
        card: '#FFFFFF',
        header: '#FAF3F0',
    } : {
        background: '#2C3333',
        text: '#E7F6F2',
        primary: '#A5C9CA',
        accent: '#395B64',
        card: '#354242',
        header: '#2C3333',
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Hook: Sayfalarda kullanmak için
export function useTheme() {
    return useContext(ThemeContext);
}