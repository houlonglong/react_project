import React from 'react';
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'

import {Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        let sttings = {
            dots: true,
            infinite: true,
            speed: 500,
            skudesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...sttings}>
                                    <div>
                                        <img src="./src/img/carousel_1.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./src/img/carousel_2.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./src/img/carousel_3.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./src/img/carousel_4.jpg"/>
                                    </div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={9} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={10} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={10} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="新闻" key="3">
                                <PCNewsBlock count={10} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="体育" key="4">
                                <PCNewsBlock count={9} type="tiyu" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <div>
                          <PCNewsImageBlock paddingleft="10px" count={8} type="guonei" width="100%" cartTitle="国际头条" imageWidth="112px"/>
                          <PCNewsImageBlock paddingleft="10px" count={8} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="112px"/>
                      </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
PCNewsBlock
