import React from "react";
import {Table,Modal,Popconfirm,message,Form,Input,Button} from "antd"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Home =()=>{
  const table_data= useSelector(state=>state.Data.userDate.users)
    const history = useHistory()

    const [data,set_data]=React.useState({})

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Delete this record');
  
   
    const showModal = () => {
      setVisible(true);
    };

    
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

    
function confirm(e) {
    console.log(e);
    message.success('Deleted');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Not Deleted');
  }
    
    console.log(table_data)
    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
        {
            title: 'Email',
            dataIndex: 'emailAddress',
            key: 'emailAddress',
          },
          {
            title: 'Action',
            dataIndex: 'key',
            key:"key",
            render: (text, record) => (
                <>
                <button onClick={()=> {history.push("/edit",record)}}>
                  {"Edit"}
                </button>
                <button onClick={()=> {set_data(record); showModal()}}>
                  {"View"}
                </button>
                <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <a href="#">Delete</a>
                </Popconfirm>
                
                </>
                
               ),
          }
      ];



    return (
        <div>
            <Table dataSource={table_data} columns={columns} />
            <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
           <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="First"
        rules={[{ required: false, message: 'Please Enter First Name!' }]}
      >
        <Input disabled defaultValue={data.firstName} onChange={(e)=>{set_data({...data,firstName:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="Last Name"
        rules={[{ required: false, message: 'Please Enter Last Name!' }]}
      >
        <Input disabled defaultValue={data.lastName} onChange={(e)=>{set_data({...data,lastName:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: false, message: 'Please Enter Email!' }]}
      >
        <Input disabled defaultValue={data.emailAddress} onChange={(e)=>{set_data({...data,emailAddress:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="Phone Number"
        rules={[{ required: false, message: 'Please Enter Mobile!' }]}
      >
        <Input  disabled defaultValue={data.phoneNumber} onChange={(e)=>{set_data({...data,phoneNumber:e.target.value})}}  />
      </Form.Item>

    
    </Form>
      </Modal>
        </div>
    )
}