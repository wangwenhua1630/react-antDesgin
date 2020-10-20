import React from 'react';
import { Table, Button, Modal, Form, Input, } from 'antd';

const columns = [
  {
    title: '项目名称',
    dataIndex: 'project_name',
  },
  {
    title: '子项目标识',
    dataIndex: 'sub_identify',
  },
  {
    title: '前置版本号',
    dataIndex: 'front_version',
  },
  {
    title: '本次迭代版本号',
    dataIndex: 'version',
  },
  {
    title: '迭代内容大纲',
    dataIndex: 'content',
  },
  {
    title: '关联上线文档',
    dataIndex: 'documents_link',
  },
  {
    title: '实际开发人员',
    dataIndex: 'developers',
  },
  {
    title: '申请上线时间',
    dataIndex: 'create_at',
  },
  {
    title: '上线完成时间',
    dataIndex: 'finish_at',
  },
  {
    title: '上线状态',
    dataIndex: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operation',
    render: () => (
        <>
            <Button type="primary" size='small'>编辑</Button>
            <Button type="link" size='small'>删除</Button>
        </>
      )
  }
];

const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Nicholas H.Tao ${i}`,
//     email: `huangtao5921@163.com`,
//     age: 27,
//     address: `China, Shanghai`,
//   });
// }

class List extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    visibleDialog: false
  };
  showModal = () => {
    this.setState({
      visibleDialog: true,
    });
  };
  handleOk = e => {
    this.setState({
      visibleDialog: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visibleDialog: false,
    });
  };
  start = () => {
    this.setState({ loading: true });
    this.setState({
      selectedRowKeys: [],
      loading: false,
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="content-wrap">
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" style={{marginRight:15}}>
            新增
          </Button>
          {/* <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            取消
          </Button> */}
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择 ${selectedRowKeys.length} 条记录` : ''}
          </span>
        </div>
        <Table bordered={true} rowSelection={rowSelection} columns={columns} dataSource={data} />

        <Modal
          title="新增项目"
          visible={this.state.visibleDialog}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }

}

export default List
