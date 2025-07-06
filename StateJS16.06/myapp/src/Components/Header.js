import './Header.css'
import { NavLink } from 'react-router-dom';
import {  useState ,useEffect } from 'react';
export function Header(){
    const[darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor =  darkMode ? '#1e1e1e' : '#ffffff'; 
        document.body.style.color =  darkMode ?  '#ffffff' : '#1e1e1e' ; 
    }, [darkMode])

    return(
        <header>
            <div className='header_inner'>
                <nav>
                    <NavLink to='/first'>Головна</NavLink>
                    <NavLink to='/first'>Т Шевченко</NavLink>
                    <NavLink to='/second'> І Франко</NavLink>
                    <NavLink to='/third'>Л Українка</NavLink>
                </nav>
                <button onClick={() => setDarkMode(prev => !prev)}>Click</button>
            </div>
        </header>
    );
}






