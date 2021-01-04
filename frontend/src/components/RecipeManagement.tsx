
import React, { useState } from 'react';
import { Form, Input, Button, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import MainApi from 'services/API/http-client';
import { Recipe } from '../types/recipe';
import { AxiosError } from 'axios';

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
  const [requestState, setRequestState] = useState({ loading: false, error: '' })

  const onFinish = async (recipeData: Recipe) => {
    setRequestState({ loading: true, error: '' })
    const mainApi = MainApi.getInstance();
    const createdRecipe = await mainApi.putRecipe(recipeData)
      .catch((err: AxiosError) => setRequestState({ loading: false, error: 'There was an issue adding the recipe. ' + err.message }))
    if (createdRecipe) {
      setRequestState({ loading: false, error: '' })
    }
  };

  const onReset = () => {
    form.resetFields();
    setRequestState({ loading: false, error: '' })
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      {requestState.error && <Alert
        message="Error"
        description={requestState.error}
        type="error"
        closable
        showIcon
      />}
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