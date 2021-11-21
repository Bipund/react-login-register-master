import React from "react";
import {Table,Modal,Popconfirm,message,Form, Input,Button} from "antd"
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const Edit =(props)=>{
    const table_data= useSelector(state=>state.Data.userDate.users)
    const history = useHistory()

    const formRef = React.createRef();


    const [data,set_data]=React.useState(props.location.state)
    console.log(props.location.state) //user data here
   
    const onFinish = (values: any) => {
        console.log('Success:', values);
        history.push("/home")
        message.success('save Successfully');

      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      React.useEffect(()=>{
        formRef.current.setFieldsValue({
            

          });
      },[])
    return (
        <div>
            <Form
            ref={formRef}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="First"
        rules={[{ required: false, message: 'Please Enter First Name!' }]}
      >
        <Input defaultValue={data.firstName} onChange={(e)=>{set_data({...data,firstName:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="Last Name"
        rules={[{ required: false, message: 'Please Enter Last Name!' }]}
      >
        <Input defaultValue={data.lastName} onChange={(e)=>{set_data({...data,lastName:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: false, message: 'Please Enter Email!' }]}
      >
        <Input defaultValue={data.emailAddress} onChange={(e)=>{set_data({...data,emailAddress:e.target.value})}}  />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="Phone Number"
        rules={[{ required: false, message: 'Please Enter Mobile!' }]}
      >
        <Input defaultValue={data.phoneNumber} onChange={(e)=>{set_data({...data,phoneNumber:e.target.value})}}  />
      </Form.Item>

     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}