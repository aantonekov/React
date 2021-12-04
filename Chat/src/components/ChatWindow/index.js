import style from './style.module.css'
import UserMessage from '../UserMessage'
import MyMessage from '../MyMessage'

import img1 from './img/yoda.png'
import img2 from './img/user (1).png'
import img3 from './img/programmer.png'
import img4 from './img/mandalorian.png'
import img5 from './img/user.png'
import img6 from './img/droid.png'

function ChatWindow() {
    return (
      <>          
        <div className = {style.chatWindow}>
          <div className={style.windowItem}>
            <UserMessage 
              userName='Anatoliy'
              useImg ={img1} 
              userMessage='Hi!'  
            />

            <UserMessage 
              userName='Toni '
              useImg={img4} 
              userMessage='Шо ты?'  
            />

            <MyMessage 
              userName='You'
              useImg ={img5}
              userMessage='No coments' 
            />

            <UserMessage 
              userName='Denis'
              useImg ={img6} 
              userMessage='Я в своем познании настолько преисполнился, что я как будто бы уже

              сто триллионов миллиардов лет проживаю на триллионах и
              
              триллионах таких же планет, как эта Земля, мне этот мир абсолютно
              
              понятен, и я здесь ищу только одного - покоя, умиротворения и
              
              вот этой гармонии, от слияния с бесконечно вечным, от созерцания
              
              великого фрактального подобия и от вот этого замечательного всеединства
              
              существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно
              
              малое, хоть ввысь - бесконечное большое, понимаешь? '  
            />
            <MyMessage 
              userName='You'
              useImg ={img5}
              userMessage='End....' 
            />
          </div>
        </div>
      </>
    );
  }
  
export default ChatWindow;
  