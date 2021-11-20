import style from './style.module.css'

import img from './img/1.jpg'

function MyPhotoPage() {
  return (
   <div className= {style.container}>
      <img className ={style.img}  src = {img} alt = ''/>
   
   </div>
  );
}

export default MyPhotoPage;
