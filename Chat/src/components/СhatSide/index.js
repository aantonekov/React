import style from './style.module.css'
import Navigation from '../Navigation'
import ChatWindow from '../ChatWindow'
import TextInput from '../TextInput'


function chatSide() {
    return (
      <>
        <div className = {style.container}>
          <Navigation />
          <ChatWindow />
          <TextInput />
         
      </div>
      </>
    );
  }
  
export default chatSide;
  