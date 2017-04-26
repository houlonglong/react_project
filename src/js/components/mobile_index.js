import React from 'react';
import MobileHerader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import MoblieList from './moblie_list.js';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {

    render() {
        let sttings = {
            dots: true,
            infinite: true,
            speed: 500,
            skudesToShow: 1,
            autoplay: true
        }
        const banber = <div class="carousel" style={{
            "float": "none"
        }}>
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
        return (
            <div>
                <MobileHerader/>
                <Tabs>
                    <TabPane tab="头条" key="1">
                        {banber}
                        <MoblieList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        {banber}
                        <MoblieList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        {banber}
                        <MoblieList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        {banber}
                        <MoblieList count={20} type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        {banber}
                        <MoblieList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter/>
            </div>

        );
    };
}
