import React, { useEffect, useState } from 'react';
import { List, Card, Spin, Alert, Button } from 'antd';
import { AxiosError } from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';

import MainApi from 'services/API/http-client';
import { Recipe } from '../types/recipe';
import Tagliste from './Tagliste';

import { foodRecipes } from 'data/dummyRecipes';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
interface FoodCourtProps {
  cookingList: Recipe[]
}

export default function FoodCourt(props: FoodCourtProps) {
  const [recipeCatalog, setRecipeCatalog] = useState<{ loading: boolean, error: string, recipes: Recipe[] }>({
    loading: false,
    error: '',
    recipes: []
  })

  useEffect(() => {
    setRecipeCatalog({ recipes: [], error: '', loading: true });

    // Declare async function as React effect callbacks are synchronous to prevent race conditions 
    async function fetchRecipes() {
      const mainApi = MainApi.getInstance();
      const recipeCatalog = await mainApi.getRecipes()
        .catch((err: AxiosError) => setRecipeCatalog({ loading: false, recipes: foodRecipes, error: "There was an error fetching the Recipe Catalog - Using stale data instead" + err.message }))
      if (recipeCatalog) {
        setRecipeCatalog({ recipes: recipeCatalog, error: '', loading: false });
      }
    }
    fetchRecipes();

  }, [setRecipeCatalog]);

  return (
    <div>
      {recipeCatalog.loading && <Spin indicator={antIcon} />}

      {recipeCatalog.error && <Alert
        message="Error"
        description={recipeCatalog.error}
        type="error"
        closable
        showIcon
      />}
      <List
        size="large"
        footer={<div><Button type="primary">New Recipe</Button></div>}
        bordered
        dataSource={recipeCatalog.recipes}
        grid={{
          gutter: 25,
          xs: 2,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 5,
          xxl: 5,
        }}
        renderItem={item => (
          <List.Item key={item.id}>
            <Card title={item.name}
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example"
                style={{ objectFit: 'cover' }}
                width={300}
                height={400}
                src={item.image ? item.image : "https://designshack.net/wp-content/uploads/placeholder-image.png"}
              />}>
              {item.description && <p>{item.description}</p>}
              <Button
                type={(props.cookingList.findIndex(recipe => recipe.name === item.name) ? 'primary': undefined)}
                shape="round"
                icon={<ShoppingCartOutlined />} size="large">
                {(props.cookingList.findIndex(recipe => recipe.name === item.name) ? 'Add to cooking list' : 'In cooking list')}
              </Button>
              {item.tags && <Tagliste
                key={item.id}
                tags={item.tags}
              />}
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}
