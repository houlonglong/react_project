import React from 'react';
import {Row, Col, Tabs, Card} from 'antd';
const TabPane = Tabs.TabPane;

export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount(){
      const myFetchOptions = {
        'method':'GET'
      }
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
      .then(response=>response.json())
      .then(json=>{
        this.setState({newsItem:json})
        document.title = this.state.newsItem.title + " - jack | test 驱动的新闻平台";
      })
    }
    createMarkup  () {
         return {__html:this.state.newsItem.pagecontent};
    }
    render () {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} class="container">
                      <div class="artcleContainer" dangerouslySetInnerHTML={this.createMarkup()}>
                      </div>
                    </Col>
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
