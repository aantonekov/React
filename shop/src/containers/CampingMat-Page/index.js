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
              <h3 className={style.nameTovar}>Коремат зеленый</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>100$</h2>
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
              <h3 className={style.nameTovar}>Коремат желтый</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>50$</h2>
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
              <h3 className={style.nameTovar}>Коремат красный</h3>
            </div> 

            <div className={style.btn}>
              <Button type="primary">
                <Meta title="Buy"  />
              </Button>
              <h2 className={style.price}>90$</h2>
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
              <h3 className={style.nameTovar}>Коремат розовый</h3>
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
                <h3 className={style.nameTovar}>Коремат хаки</h3>
              </div> 

              <div className={style.btn}>
                <Button type="primary">
                  <Meta title="Buy"  />
                </Button>
                <h2 className={style.price}>110$</h2>
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
                <h3 className={style.nameTovar}>Коремат зеленый</h3>
              </div> 

              <div className={style.btn}>
                <Button type="primary">
                  <Meta title="Buy"  />
                </Button>
                <h2 className={style.price}>100$</h2>
              </div>
            </Card>,
          </Col>
        
      </Row>
    
   </>
 )
}

export default Body;
