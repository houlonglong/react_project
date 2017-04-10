import React from 'react';
import { Row, Col,Menu, Icon} from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MobileFooter extends React.Component{
  constructor() {
      super();
      this.state = {
          current: 'top',
          modalVisible: false,
          action: 'login',
          haslogined: false,
          userNickName: '',
          userid: 0
      }
  }
  setmodalVisible(value) {
      console.log(value)
      this.setState({modalVisible: value})
  }
  handleClick(e) {
      if (e.key == "register") {
          this.setState({current: "register", modalVisible: true})
      } else {
          this.setState({current: e.key})
      }
  }
  handleSubmit(e){
    e.preventDefault();
    let myFetchOptions = {
      method:'GET'
    }
    //let fromdata = this.props.from.getFieldsValue()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName="+values.r_userName+"&r_password="+values.r_password+"&r_confirmPassword="+values.r_confirmPassword,myFetchOptions).
          then(response=>response.json()).then(json=>{
                console.log(json)
               this.setState({userNickName:json.NickUserName,userid:json.UserId});
               console.log(this.state)
               });
               message.success("注册成功！");
                this.setmodalVisible(false);
      }
    });
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
