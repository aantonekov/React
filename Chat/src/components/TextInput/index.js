import style from './style.module.css'

import smile from './img/happy.png'
import microphone from './img/microphone.png'
import paperclip from './img/paperclip.png'
import photos from './img/photos.png'

function TextInput() {
    return (
      <>
        <div className={style.textContainer}>
          <div className={style.entryField}>
            <input type='text' className={style.textInput} placeholder='Write you message'></input>

            <button className={style.btnInput}>Send</button>
          </div>
          <div className={style.entryField}>
            <div className={style.chatIcons}>
              {/* <img className ={style.chatImg}  src = {smile} alt = '' for='input__file'/> */}

              <a src='#'> <img className ={style.chatImg}  src = {microphone} alt = ''/></a>
              <a src='#'><img className ={style.chatImg}  src = {paperclip} alt = ''/></a>
              <a src='#'><img className ={style.chatImg}  src = {photos} alt = ''/></a>      
              
            
            </div>
          </div>
          
          
        </div>          
      </>
    );
  }
  
export default TextInput;
  