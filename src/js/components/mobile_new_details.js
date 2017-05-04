import React from 'react';
import MobileHerader from './mobile_header.js';
import MobileFooter from './mobile_footer.js';
import {Row, Col, Tabs, Card,BackTop} from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount() {
        const myFetchOptions = {
            'method': 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({newsItem: json})
            document.title = this.state.newsItem.title + " - jack | test 驱动的新闻平台";
        })
    }
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    }
    render() {
        return (
            <div id='mobileDetailsContainer'>
                <MobileHerader></MobileHerader>
                <div class="ucmobilelis">
                <Row>
                    <Col span={24} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop></BackTop>
                  </div>  
            </div>
        )
    }
}
