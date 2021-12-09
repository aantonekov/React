import {  Row, Col, Button, Card } from 'antd';
import 'antd/dist/antd.css';

import style from './style.module.css'

import firstPhoto from './img/1.jpeg'
import secondPhoto from './img/2.jpg'
import thirdPhoto from './img/3.jpg'
import forsPhoto from './img/4.jpg'
import fifesdPhoto from './img/5.jpg'
import thiksPhoto from './img/6.jpg'

function Body() {  
  const { Meta } = Card;
 return(
   <>
    


      <Row gutter={[8, 24]}>
        <Col span={8} >
          <Card
            hoverable
            style={{ 
              width: "100%" ,              
            }}
            cover={<img className={style.img} alt="example" src={firstPhoto} />}
          >
          
            <div className={style.containerNameTovar}>
              <h3 className={style.nameTovar}>Палатка желтая</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>350$</h2>
            </div>
          </Card>,
        </Col>

        <Col span={8} >
          <Card
            hoverable
            style={{ 
              width: "100%" ,              
            }}
            cover={<img className={style.img} alt="example" src={secondPhoto} />}
          >
          
            <div className={style.containerNameTovar}>
              <h3 className={style.nameTovar}>Палатка коричневая</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>400$</h2>
            </div>
          </Card>,
        </Col>

        <Col span={8} >
          <Card
            hoverable
            style={{ 
              width: "100%" ,              
            }}
            cover={<img className={style.img} alt="example" src={thirdPhoto} />}
          >
          
            <div className={style.containerNameTovar}>
              <h3 className={style.nameTovar}>Палатка темнозеленая</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>200$</h2>
            </div>
          </Card>,
        </Col>


        <Col span={8} >
          <Card
            hoverable
            style={{ 
              width: "100%" ,              
            }}
            cover={<img className={style.img} alt="example" src={forsPhoto} />}
          >
          
            <div className={style.containerNameTovar}>
              <h3 className={style.nameTovar}>Палатка хаки</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>200$</h2>
            </div>
          </Card>,
        </Col>

          <Col span={8} >
            <Card
              hoverable
              style={{ 
                width: "100%" ,              
              }}
              cover={<img className={style.img} alt="example" src={fifesdPhoto} />}
            >
            
              <div className={style.containerNameTovar}>
                <h3 className={style.nameTovar}>Палатка белая</h3>
              </div> 

              <div className={style.btn}>
                <Button type="primary">
                  <Meta title="Buy"  />
                </Button>
                <h2 className={style.price}>200$</h2>
              </div>
            </Card>,
          </Col>

          <Col span={8} >
            <Card
              hoverable
              style={{ 
                width: "100%" ,              
              }}
              cover={<img className={style.img} alt="example" src={thiksPhoto} />}
            >
            
              <div className={style.containerNameTovar}>
                <h3 className={style.nameTovar}>Палатка зеленая</h3>
              </div> 

              <div className={style.btn}>
                <Button type="primary">
                  <Meta title="Buy"  />
                </Button>
                <h2 className={style.price}>200$</h2>
              </div>
            </Card>,
          </Col>

        
        
      </Row>
    
   </>
 )
}

export default Body;
