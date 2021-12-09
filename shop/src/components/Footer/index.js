import { Layout } from 'antd';
import 'antd/dist/antd.css';

import style from './style.module.css'

function Page() {
  const { Footer } = Layout;
  

 return(
   <>   
    
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

   </>
 )
}

export default Page;
