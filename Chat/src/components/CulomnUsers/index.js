import style from './style.module.css'
import UserList from '../UserList/index'


import img1 from './img/yoda.png'
import img2 from './img/user (1).png'
import img3 from './img/programmer.png'
import img4 from './img/mandalorian.png'
import img5 from './img/user.png'
import img6 from './img/droid.png'

function CulomnUsers() {

  
  return (
    <>
      <div className = {style.container}>
        <p>SecretChat</p>

        <div className = {style.userContainer}>
          <h1>Users Online</h1>
       
          <UserList
           userName='Anatoliy'
          //  userMessage='Hi!'
           useImg={img1}
          />

          <UserList
           userName='Dmitriy '
          //  userMessage='No comments'
          useImg={img2}
          />
          
          <UserList
           userName='Leonardo '
          //  userMessage='I`m the best!!!!!'
          useImg={img3}
          />

          <UserList
           userName='Toni '
          //  userMessage='I`m the best!!!!!'
          useImg={img4}
          />

          <UserList
           userName='Alexand '
          //  userMessage='I`m the best!!!!!'
          useImg={img5}
          />

          <UserList
           userName='Denis'
          //  userMessage='I`m the best!!!!!'
          useImg={img6}
          />


        </div>

      </div>
    </>
  );
  }
  
export default CulomnUsers;
  