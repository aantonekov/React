import style from './style.module.css'

function MyMessage (props) {
  const { userName, userMessage, useImg } = props
    return (
      <>
      <div className={style.messageContainer}>
       

        <div className={style.container}>
          <div className={style.userMessInf}>
            <h3 className={style.userName}> {userName}</h3>
          </div>
          <div className={style.userMessage}>
            <p className={style.usertext}>{userMessage}</p>
          </div>
        </div>

        <div className={style.divUserImg}>
          <img className ={style.userImg}  src = {useImg} alt = ''/>
        </div>
        
      </div>
      </>
    );
  }
  
export default MyMessage ;
  