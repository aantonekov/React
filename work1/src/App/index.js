import Header from '../components/Header'
import Footer from '../components/Footer'

import AboutUsPage from '../containers/AboutUsPage';
import PrettyCatPage from '../containers/PrettyCatsPage';
import MyPhotoPage from '../containers/MyPhotoPage';

import InfoHistry from '../components/InfoHistry'
import OurAchievements from '../components/OurAchievements'

import { Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>

      <Routes>
        
        <Route exact path = '/aboutUs' element= {<AboutUsPage/>}/>
      
        <Route exact path = '/aboutUs/InfoHistry' element= {<InfoHistry/>}/>     
  
        <Route exact path = '/aboutUs/OurAchievements' element= {<OurAchievements/>}/>

        <Route exact path = '/preatyCat' element= {<PrettyCatPage/>}/>

        <Route exact path = '/myPhoto' element= {<MyPhotoPage/>}/>

      </Routes>

      <Footer/>
    </>
  );
}

export default App;
