import style from './style.module.css'

function UserList(props) {
  const { userName, useImg } = props
    return (
      <>
      <div className={style.userCell}>
        <h3> {userName}</h3>
        <img className ={style.userImg}  src = {useImg} alt = ''/>
      </div>
      </>
    );
  }
  
export default UserList;
  