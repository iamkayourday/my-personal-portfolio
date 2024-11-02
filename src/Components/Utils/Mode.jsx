// Mode.js
import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Mode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 mb-2 text-sm text-black   dark:text-white rounded-md"
        >
            {isDarkMode ? <SunIcon className="w-5 h-5 mr-1" /> : <MoonIcon className="w-5 h-5 mr-1" />}
        </button>
    );
};

export default Mode;
