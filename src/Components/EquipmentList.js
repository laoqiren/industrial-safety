import React from 'react';
import { Menu, Icon, Table } from 'antd';

const equipmentTypes = ['SCADA', 'PLC', 'DCS'];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

class EquipmentList extends React.Component {
    constructor(props) {
        super(props);
        const equipmentType = this.props.match.params.type;
        this.state = {
            current: equipmentType,
            equipments: [],
            columns: []
        };
    }
    componentDidMount() {
        // 根据设备类型拉取设备列表

        this.setState({
            equipments: [{
                key: '1',
                number: '编号1xxxx',
                name: '设备名称xxxxx',
                brand: '品牌',
                safetyRate: 96
            },
            {
                key: '2',
                number: '编号1xxxx',
                name: '设备名称xxxxx',
                brand: '品牌',
                safetyRate: 96
            },
            {
                key: '3',
                number: '编号1xxxx',
                name: '设备名称xxxxx',
                brand: '品牌',
                safetyRate: 96
            },
            {
                key: '4',
                number: '编号1xxxx',
                name: '设备名称xxxxx',
                brand: '品牌',
                safetyRate: 96
            },
        ],
        columns: [
            {
                title: '编号',
                dataIndex: 'number',
                render: text => <a href="javascript:;">{text}</a>,
              }, 
              {
                title: '设备名称',
                dataIndex: 'name',
              }, 
              {
                title: '品牌',
                dataIndex: 'brand',
              },
              {
                title: '安全系数',
                dataIndex: 'safetyRate',
              }
        ]
        });
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div>
                <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                >
                {
                    equipmentTypes.map(type => 
                        <Menu.Item key={type}>
                            {type}
                        </Menu.Item>
                    )
                }
                </Menu>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.equipments}/>
            </div>

        );
    }
}

export default EquipmentList;