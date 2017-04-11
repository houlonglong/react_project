import React from 'react';
import {Router, Link} from 'react-router'
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
          haslogined: true,
          userNickName: '',
          userid: 0
      }
  }
  setmodalVisible(value) {
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
    var formData = this.props.form.getFieldsValue();
    //let fromdata = this.props.from.getFieldsValue()
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
      + "&username="+formData.userName+"&password="+formData.password
      +"&r_userName=" + formData.r_userName + "&r_password="
      + formData.r_password + "&r_confirmPassword="
      + formData.r_confirmPassword, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({userNickName: json.NickUserName, userid: json.UserId});
    });
    if (this.state.action=="login") {
      this.setState({hasLogined:true});
    }
    message.success("请求成功！");
    this.setmodalVisible(false);
  }
  login(){
    this.setmodalVisible(true)
  }
  callback(key){
    alert(key)
    if(key === 1){
      this.setState({
        action: 'register',
      })
    }else{
      this.setState({
        action: 'login',
      })
    }
  }
  render(){
     const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined ?
    <Link className="login_icon">
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
             <Tabs type="card" onChang={this.callback.bind(this)}>
                 <TabPane tab="注册" key="1" tab={< span > <Icon type="user-add"/>注册 < /span>}>
                     <Form onSubmit={this.handleSubmit.bind(this)} >
                         <FormItem label="账户">
                         {getFieldDecorator('r_userName', { rules: [{ message: 'Please input your username!' }]})(
                             <Input prefix={<Icon type="user"  />} placeholder="请输入你的账号" />
                         )}
                         </FormItem>
                         <FormItem label="密码">
                         {getFieldDecorator('r_password', { rules: [{  message: 'Please input your username!' }]})(
                             <Input type="password" prefix={<Icon type="lock"  />} placeholder="请输入你的密码" />
                         )}

                         </FormItem>
                         <FormItem label="确认密码">
                         {getFieldDecorator('r_confirmPassword', { rules: [{  message: 'Please input your username!' }]})(
                             <Input type="password" prefix={<Icon type="lock"  />} placeholder="请再次输入你的密码" />
                         )}

                         </FormItem>
                         <FormItem>
                             <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
                         </FormItem>
                     </Form>
                 </TabPane>
                 <TabPane tab={< span > <Icon type="smile-o"/>登录 < /span>} key="2">
                 <Form onSubmit={this.handleSubmit.bind(this)} >
                     <FormItem label="账户">
                     {getFieldDecorator('userName', { rules: [{ required: false, message: 'Please input your username!' }]})(
                         <Input prefix={<Icon type="user"  />} placeholder="请输入你的账号" />
                     )}
                     </FormItem>
                     <FormItem label="密码">
                     {getFieldDecorator('password', { rules: [{ required: false, message: 'Please input your username!' }]})(
                         <Input type="password" prefix={<Icon type="lock"  />} placeholder="请输入你的密码" />
                     )}
                     </FormItem>
                     <FormItem>
                         <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                     </FormItem>
                 </Form>
                 </TabPane>
             </Tabs>
         </Modal>
       </div>
    );
  };
}
export default MobileHerader = Form.create()(MobileHerader);
