import React from 'react';

class AddEquipment extends React.Component {
    render() {
        const equipmentType = this.props.match.params.type;
        return (
            <div>
                添加设备 {equipmentType}
            </div>
        )
    }
}

export default AddEquipment;