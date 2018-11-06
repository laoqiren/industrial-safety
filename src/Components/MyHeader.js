import React from 'react';
import { Menu, Row, Col, Avatar, Dropdown, Icon, Drawer, Button } from 'antd';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
class MyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoVisible: false,
            loginVisible: false,
            registerVisible: false
        };
    }
    showInfo = () => {
        this.setState({
            infoVisible: true
        });
    }
    closeInfo = () => {
        this.setState({
            infoVisible: false
        });
    }
    showLogin = () => {
        this.setState({
            loginVisible: true
        });
    }
    closeLogin = () => {
        this.setState({
            loginVisible: false
        });
    }
    showRegister = () => {
        this.setState({
            registerVisible: true
        });
    }
    closeRegister = () => {
        this.setState({
            registerVisible: false
        });
    }
    render() {
        const userMenu = (
            <Menu>
              <Menu.Item onClick={this.showInfo}>
                <Icon type="user" theme="outlined" />个人信息
              </Menu.Item>
              <Menu.Item>
                <Icon type="book" theme="outlined" />账户信息
              </Menu.Item>
              <Menu.Item>
                <Icon type="warning" theme="outlined" style={{ color: 'red' }} /><span style={{ color: 'red' }}>退出登陆</span>
              </Menu.Item>
            </Menu>
        );
        return (
            <Row style={{ color: 'white' }}>
                <Col span={2}>Logo</Col>
                <Col span={8}><h1 style={{ color: "white" }}>鉴势-工控信息安全快速核查系统</h1></Col>
                <Col span={10}></Col>
                {
                    window.__user__.isLogin ? (
                    <Col span={4}>
                        <Dropdown overlay={userMenu}>
                            <Avatar size="large" style={{ backgroundColor: '#f56a00' }}>
                                {window.__user__.info.userName.slice(0, 1).toUpperCase()}
                            </Avatar>
                        </Dropdown>
                    </Col>
                    ) : (<Col span={4}><Button onClick={this.showLogin} type="primary">登陆</Button> <Button onClick={this.showRegister} type="primary">注册</Button></Col>)
                }
                
                <Drawer
                    title="用户信息"
                    placement="right"
                    closable={false}
                    onClose={this.closeInfo}
                    visible={this.state.infoVisible}
                >
                    <p>用户名： {window.__user__.info.userName}</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>

                <Drawer
                    title="登陆"
                    width={420}
                    placement="right"
                    onClose={this.closeLogin}
                    maskClosable={false}
                    visible={this.state.loginVisible}
                    style={{
                      height: 'calc(100% - 55px)',
                      overflow: 'auto',
                      paddingBottom: 53,
                    }}
                >
                    <LoginUser />
                </Drawer>

                <Drawer
                    title="注册"
                    width={420}
                    placement="right"
                    onClose={this.closeRegister}
                    maskClosable={false}
                    visible={this.state.registerVisible}
                    style={{
                      height: 'calc(100% - 55px)',
                      overflow: 'auto',
                      paddingBottom: 53,
                    }}
                >
                    <RegisterUser />
                </Drawer>
            </Row>
        )
    }
}

export default MyHeader;