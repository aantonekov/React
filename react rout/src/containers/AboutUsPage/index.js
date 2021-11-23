import style from './style.module.css'

import { NavLink } from 'react-router-dom';



function AboutUsPage() {

  return (
   <div className= {style.container}>
      <h1>Greetings to you stranger!</h1>

      <div>
      <NavLink className = {style.navItems} to ='/aboutUs/InfoHistry'> Our Histry</NavLink>
      <NavLink className = {style.navItems} to ='/aboutUs/OurAchievements'> Our Achievements</NavLink>

      </div>
      
   
      
   </div>
  );
}

export default AboutUsPage;
