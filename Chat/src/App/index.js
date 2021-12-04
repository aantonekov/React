import style from './style.module.css'

import CulomnUsers from "../components/CulomnUsers";
import СhatSide from "../components/СhatSide";
import ChatWindow from "../components/ChatWindow";




function App() {
  
  return (
    
    <>
      <div className={style.container}  >
        <CulomnUsers />
        <СhatSide />
      </div>
    </>
  );
}

export default App;
