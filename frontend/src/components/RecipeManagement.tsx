
import React, { useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import { Recipe } from '../types/recipe';
import axios from 'axios';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const RecipeManagement = () => {
  const [form] = Form.useForm<Recipe>();
  const [requestState, setRequestState ] = useState({loading: false, error: ''})

  const onFinish = (recipeData: Recipe) => {
        setRequestState({loading: true, error: ''})
        axios.put<Recipe>(`http://localhost:8080/recipe`, recipeData)
          .then(
            (res) => {
            console.log('the res', res)
            setRequestState({loading: false, error: ''})
            }, 
            (err) => {
            setRequestState({loading: false, error: 'There was an issue adding the recipe.'})
          });
  };

  const onReset = () => {
    form.resetFields();
    setRequestState({loading: false, error: ''})
  };

  return (
      
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="name"
        label="Name of recipe"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit {requestState.loading && <Spin indicator={antIcon} />}
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RecipeManagement