import style from './style.module.css'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'

function AboutUsPage() {
  return (
    <div className= {style.container}>
      <h1>Pretty Cats!</h1>

      <div className = { style.imgContainer}>
          <img className ={style.img}  src = {img1} alt = ''/>
          <img className ={style.img}  src = {img2} alt = ''/>
          <img className ={style.img}  src = {img3} alt = ''/>
      </div>
    </div>

  );
}

export default AboutUsPage;
