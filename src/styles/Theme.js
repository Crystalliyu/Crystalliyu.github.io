import React from 'react';
export const themes = {
    light: {
        font: '#000000',
        background: '#ffffff',
        headerBg: '#ffffff',
        menuSelectedBg: '#f0f3ff',
        menuBorder: '#f0f0f0',
        headerShadow: '0 4px 4px rgba(226, 229, 234, 0.35)',
        cardTitle: '#1C1E21',
    },
    dark: {
        font: '#ffffff',
        headerBg: '#242526',
        background: '#18191a',
        menuSelectedBg: 'transparent',
        menuBorder: '#3a3e43',
        headerShadow: 'none',
        cardTitle: '#ffffff',
    },
};

export const ThemeContext = React.createContext({
    themes: themes.light,
    toggleTheme: (value) => {console.log(value)},
});