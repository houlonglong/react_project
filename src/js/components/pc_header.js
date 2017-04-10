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
class PCHerader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'register',
            hasLogined: false,
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
		//页面开始向 API 进行提交数据
		e.preventDefault();
  		var myFetchOptions = {
  			method: 'GET'
  		};
  		var formData = this.props.form.getFieldsValue();
  		console.log(formData);
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
        alert(11)
  			this.setState({hasLogined:true});
  		}
  		message.success("请求成功！");
  		this.setmodalVisible(false);
	};
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
    render() {
        //  let { getFieldProps } = this.props.from;
         const { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" class="register">
                    <Button type="primary"  htmlType="button">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank" >
                        <Button type="dashed" >个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button type="ghost" >退出</Button>
                </Menu.Item>
            : <Menu.Item key="register" class="register">
                <Icon type="login" key="register"/>注册/登录
            </Menu.Item>
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="./" class="logo">
                            <img src="../src/img/logo.png" alt="logo"/>
                            <span>简单新闻网</span>
                        </a>
                    </Col>
                    <Col span={13}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                                <Icon type="appstore" key="top"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guinei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>{ this.setmodalVisible(false)}} onOk={() => this.setmodalVisible(false)} okText="关闭">
                    <Tabs type="card" onChang={this.callback.bind(this)}>
                        <TabPane tab="注册" key="1" tab={< span > <Icon type="user-add"/>注册 < /span>}>
                            <Form onSubmit={this.handleSubmit.bind(this)} >
                                <FormItem label="账户">
                                {getFieldDecorator('r_userName', { rules: [{ required: false, message: 'Please input your username!' }]})(
                                    <Input prefix={<Icon type="user"  />} placeholder="请输入你的账号" />
                                )}
                                </FormItem>
                                <FormItem label="密码">
                                {getFieldDecorator('r_password', { rules: [{ required: false, message: 'Please input your username!' }]})(
                                    <Input type="password" prefix={<Icon type="lock"  />} placeholder="请输入你的密码" />
                                )}

                                </FormItem>
                                <FormItem label="确认密码">
                                {getFieldDecorator('r_confirmPassword', { rules: [{ required: false, message: 'Please input your username!' }]})(
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
            </header>
        );
    };
}

export default PCHerader = Form.create()(PCHerader);
