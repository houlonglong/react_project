import React from 'react';

import {
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Modal,
    Form,
    Button,
    Input,
    checkbox
} from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import MediaQuery from 'react-responsive';
class MobileHerader extends React.Component{
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
  login(){
    this.setmodalVisible(true)
  }
  render(){
     const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ?
    <Link>
      <Icon type="inbox" />
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)} />
    return (
       <div id="mobileheader">
         <header>
         <img src="../src/img/logo.png" alt="logo" />
         <span>简单新闻网</span>
         {userShow}
         </header>
         <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>{ this.setmodalVisible(false)}} onOk={() => this.setmodalVisible(false)} okText="关闭">
             <Tabs type="card">
                 <TabPane tab="注册" key="1" tab={< span > <Icon type="user-add"/>注册 < /span>}>
                     <Form onSubmit={this.handleSubmit.bind(this)} >
                         <FormItem label="账户">
                         {getFieldDecorator('r_userName', { rules: [{ required: true, message: 'Please input your username!' }]})(
                             <Input prefix={<Icon type="user"  />} placeholder="请输入你的账号" />
                         )}
                         </FormItem>
                         <FormItem label="密码">
                         {getFieldDecorator('r_password', { rules: [{ required: true, message: 'Please input your username!' }]})(
                             <Input type="password" prefix={<Icon type="lock"  />} placeholder="请输入你的密码" />
                         )}

                         </FormItem>
                         <FormItem label="确认密码">
                         {getFieldDecorator('r_confirmPassword', { rules: [{ required: true, message: 'Please input your username!' }]})(
                             <Input type="password" prefix={<Icon type="lock"  />} placeholder="请再次输入你的密码" />
                         )}

                         </FormItem>
                         <FormItem>
                             <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                         </FormItem>
                     </Form>
                 </TabPane>
                 <TabPane tab={< span > <Icon type="smile-o"/>登录 < /span>} key="2">
                     <Form >

                     </Form>
                 </TabPane>
             </Tabs>
         </Modal>
       </div>
    );
  };
}
export default MobileHerader = Form.create()(MobileHerader);
