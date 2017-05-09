import React from 'react';
import PCHerader from './pc_header.js';
import PCFooter from './pc_footer.js'
import {Row, Col, Tabs, Card, BackTop} from 'antd';
import CommonComments from './comment_comments.js'
import PCNewsImageBlock from './pc_news_image_block'
const TabPane = Tabs.TabPane;

export default class PCNewsDetails extends React.Component {
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
            <div>
                <PCHerader></PCHerader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock paddingleft="10px" count={48} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="152px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop></BackTop>
            </div>
        )
    }
}
