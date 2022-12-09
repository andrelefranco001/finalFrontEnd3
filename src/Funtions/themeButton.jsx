import { useState } from "react";

const themeStyles = {
    dark: {
      background: '#12121296',
      textColor: 'white'
    },
    light: {
      background: 'white',
      textColor: '#12121296'
    }
  }

  function ThemesB() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

return(
    
    <button onClick={toggleTheme}>Toggle Theme</button>

)  
}
  

export default ThemesB