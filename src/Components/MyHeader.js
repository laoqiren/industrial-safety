import React from 'react';
import { Menu, Row, Col, Avatar, Dropdown } from 'antd';

class MyHeader extends React.Component {
    render() {
        return (
            <Row style={{ color: 'white' }}>
                <Col span={2}>Logo</Col>
                <Col span={8}><h1 style={{ color: "white" }}>鉴势-工控信息安全快速核查系统</h1></Col>
                <Col span={10}></Col>
                {
                    window.__user__.isLogin ? (
                    <Col span={4}>
                        <Avatar size="large">
                            {window.__user__.info.userName}
                        </Avatar>
                    </Col>
                    ) : (<Col span={4}>登陆/注册</Col>)
                }
                
            </Row>
        )
    }
}

export default MyHeader;