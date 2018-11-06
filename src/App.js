import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import MyHeader from './Components/MyHeader';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import History from './Components/History';
import EquipmentList from './Components/EquipmentList';
import AddEquipment from './Components/AddEquipment';
import Settings from './Components/Settings';

const SubMenu = Menu.SubMenu;
const { Header, Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <MyHeader />
        </Header>

        <Router>
        <Layout>
          <Sider width={256} collapsible>
            <div style={{ width: 256 }}>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1', 'sub2']}
                mode="inline"
                theme="dark"
              >
                <Menu.Item key="1">
                  <Link to="/task/taskList">
                    <Icon type="schedule" theme="outlined" />
                    <span>当前任务</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/task/addTask">
                    <Icon type="plus" theme="outlined" />
                    <span>添加任务</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/history">
                    <Icon type="inbox" />
                    <span>历史</span>
                  </Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="printer" theme="outlined" /><span>设备管理</span></span>}>
                  <Menu.Item key="4"><Link to="/equipments/list/SCADA"><span>设备列表</span></Link></Menu.Item>
                  <SubMenu key="sub2" title="添加设备">
                    <Menu.Item key="5"><Link to="/equipments/add/SCADA"><span>添加SCADA</span></Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/equipments/add/PLC"><span>添加PLC</span></Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/equipments/add/DCS"><span>添加DCS</span></Link></Menu.Item>
                  </SubMenu>
                </SubMenu>
                <Menu.Item key="8">
                  <Link to="/history">
                    <Icon type="line-chart" theme="outlined" />
                    <span>可视化</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Link to="/settings">
                    <Icon type="setting" theme="outlined" />
                    <span>设置</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>

          <Layout style={{ padding: '0 24px 24px' , minHeight: '100vh'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Route path="/task/taskList" component={TaskList}></Route>
              <Route path="/task/addTask" component={AddTask}></Route>
              <Route path="/history" component={History}></Route>
              <Route path="/equipments/list/:type" exact component={EquipmentList}></Route>
              <Route path="/equipments/add/:type" component={AddEquipment}></Route>
              <Route path="/settings" component={Settings}></Route>
            </Content>
          </Layout>
        </Layout>
        </Router>
      </Layout>
      
    );
  }
}


export default App;