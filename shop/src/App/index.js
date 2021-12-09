import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";

import CampingMatPage from '../containers/CampingMat-Page'
import SleapingBagPage from '../containers/SleapingBag-Page'
import TentsPage from '../containers/Tents-Page'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Body />

      <Routes>

        <Route exact path='/'  element={ <SleapingBagPage/>}  />
        <Route exact path='/CampingMatPage' element={ <CampingMatPage />}/>
        <Route exact path='/TentsPage' element={ <TentsPage/>} />
        
      </Routes>


      <Footer />
    </>
  );
}

export default App;
