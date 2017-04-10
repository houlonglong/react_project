import React from 'react';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


export default class PCFooter extends React.Component{
  constructor () {
    super();
    this.state={
       current: 'top'
    }
  }

  render(){
    return (
    <footer>
      <Row>
        <Col span={4}></Col>
        <Col span={16} class="footer">
          &copy;&nbsp;2017简单新闻网  大王叫我巡山制作
        </Col>
        <Col span={4}></Col>
      </Row>
    </footer>
    );
  };
}
