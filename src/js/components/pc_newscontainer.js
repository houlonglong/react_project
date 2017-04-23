import React from 'react';
import {
    Row,
    Col,
    Tabs,
    Carousel
} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
    render(){
       let sttings = {
         dots:true,
         infinite:true,
         speed:500,
         skudesToShow:1,
         autoplay:true
       }
       return (
         <div>
          <Row>
            <Col span={2}></Col>
            <Col span={20} class="container">
              <div class="leftContainer">
                <div class="carousel">
                  <Carousel {...sttings} >
                    <div>
                      <img src="./src/img/carousel_1.jpg" />
                    </div>
                    <div>
                      <img src="./src/img/carousel_2.jpg" />
                    </div>
                    <div>
                      <img src="./src/img/carousel_3.jpg" />
                    </div>
                    <div>
                      <img src="./src/img/carousel_4.jpg" />
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
         </div>
       )
    }
}
