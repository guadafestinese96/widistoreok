import logoWidi from '../../assets/widiLogoRedondo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import DropdownPerfus from './DropdownPerfus'


export default function Header() {
    return (
        <div className='headerContainer'>
            <NavLink to='/' className={({ isActive }) => isActive ? "activeLogoHeader" : "logoHeaderContainer"}>
                <img src={logoWidi} alt="logoWidi" className='logoHeader' />
            </NavLink>
          

            <div className='dropdowns'>
                <DropdownPerfus />                
            </div>      
          

        </div>
    )
}