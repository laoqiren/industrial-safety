import React from 'react';
import { List, Card, Row, Col } from 'antd';

const taskList = [
    {
        title: '任务1',
        companyName: '公司xxxxxxx',
        companyGroup: '集团xxxxxx',
        principal: '公司负责人',
        principalNumber: 13899090087,
        companyFunction: '公司负责职能xxxxxxx',
        prepaperName: '填表人是xxxxx',
        prepaperPosition: '填表人职能xxxxxx',
        prepaperTitle: '填表人职位xxxxxx',
        prepaperEducation: '填表人教育背景xxxxx',
        prepaperNumber: 13100909981
    },
    {
        title: '任务1',
        companyName: '公司xxxxxxx',
        companyGroup: '集团xxxxxx',
        principal: '公司负责人',
        principalNumber: 13899090087,
        companyFunction: '公司负责职能xxxxxxx',
        prepaperName: '填表人是xxxxx',
        prepaperPosition: '填表人职能xxxxxx',
        prepaperTitle: '填表人职位xxxxxx',
        prepaperEducation: '填表人教育背景xxxxx',
        prepaperNumber: 13100909981
    },
    {
        title: '任务1',
        companyName: '公司xxxxxxx',
        companyGroup: '集团xxxxxx',
        principal: '公司负责人',
        principalNumber: 13899090087,
        companyFunction: '公司负责职能xxxxxxx',
        prepaperName: '填表人是xxxxx',
        prepaperPosition: '填表人职能xxxxxx',
        prepaperTitle: '填表人职位xxxxxx',
        prepaperEducation: '填表人教育背景xxxxx',
        prepaperNumber: 13100909981
    },
    {
        title: '任务1',
        companyName: '公司xxxxxxx',
        companyGroup: '集团xxxxxx',
        principal: '公司负责人',
        principalNumber: 13899090087,
        companyFunction: '公司负责职能xxxxxxx',
        prepaperName: '填表人是xxxxx',
        prepaperPosition: '填表人职能xxxxxx',
        prepaperTitle: '填表人职位xxxxxx',
        prepaperEducation: '填表人教育背景xxxxx',
        prepaperNumber: 13100909981
    },
    {
        title: '任务1',
        companyName: '公司xxxxxxx',
        companyGroup: '集团xxxxxx',
        principal: '公司负责人',
        principalNumber: 13899090087,
        companyFunction: '公司负责职能xxxxxxx',
        prepaperName: '填表人是xxxxx',
        prepaperPosition: '填表人职能xxxxxx',
        prepaperTitle: '填表人职位xxxxxx',
        prepaperEducation: '填表人教育背景xxxxx',
        prepaperNumber: 13100909981
    },
];
class TaskList extends React.Component {
    render() {
        return (
            <List 
                grid={{ gutter: 16, column: 4 }}
                dataSource={taskList}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>
                        <Row>
                            <Col span={10}>公司名称：</Col>
                            <Col span={14}>{item.companyName}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>集团名称：</Col>
                            <Col span={14}>{item.companyGroup}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>公司负责人：</Col>
                            <Col span={14}>{item.principal}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>负责人电话：</Col>
                            <Col span={14}>{item.principalNumber}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>公司职能：</Col>
                            <Col span={14}>{item.companyFunction}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>填表人姓名：</Col>
                            <Col span={14}>{item.prepaperName}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>填表人职位: </Col>
                            <Col span={14}>{item.prepaperPosition}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>填表人职称：</Col>
                            <Col span={14}>{item.prepaperTitle}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>填表人学历：</Col>
                            <Col span={14}>{item.prepaperEducation}</Col>
                        </Row>
                        <Row>
                            <Col span={10}>填表人电话：</Col>
                            <Col span={14}>{item.prepaperNumber}</Col>
                        </Row>
                    </Card>
                </List.Item>
                )}
            />
        )
    }
}

export default TaskList;