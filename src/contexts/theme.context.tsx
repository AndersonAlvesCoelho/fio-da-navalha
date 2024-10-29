import { ThemeType } from '@/@types/theme.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import APP_JSON from '../../app.json';

interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const STORAGE_NAME_THEME = APP_JSON.expo.scheme + 'THEME';
  const systemColorScheme = useColorScheme();
  console.log('systemColorScheme ', systemColorScheme);
  const [theme, setTheme] = useState<ThemeType>('light');

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem(STORAGE_NAME_THEME);
      if (savedTheme) {
        setTheme(savedTheme as ThemeType);
      } else {
        setTheme(systemColorScheme || 'light');
      }
    };
    loadTheme();
  }, [systemColorScheme]);

  async function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem(STORAGE_NAME_THEME, newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
