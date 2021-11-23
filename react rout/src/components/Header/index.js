import style from './style.module.css';

import { NavLink } from 'react-router-dom';


function Header() {
  return (
   <header className = {style.header}>
      <nav className = {style.navHeader}>
      <NavLink className = {style.navItems} to ='/aboutUs'>О нас</NavLink>
      <NavLink className = {style.navItems} to ='/preatyCat'>Милие котики</NavLink>
      <NavLink className = {style.navItems} to ='/myPhoto'>Мои фотки в ванной</NavLink>

      </nav>
   </header>
    


   

  );
}

export default Header;
