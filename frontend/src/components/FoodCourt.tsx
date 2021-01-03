import React, { useEffect, useState } from 'react';
import { List, Alert, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import MainApi from 'services/API/http-client';
import { HttpError } from 'services/API/http-client.interceptor';
import { Recipe } from '../types/recipe';

import { foodRecipes } from 'data/dummyRecipes';
import { Link } from 'react-router-dom';
import ROUTES from 'routes';
import RecipeGridShowcase from './RecipeGridShowcase';

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
        .catch((err: HttpError) =>
          setRecipeCatalog({
            loading: false,
            recipes: foodRecipes,
            error: "There was an error fetching the Recipe Catalog - Using stale data instead - " + err.message
          })
        )
      if (recipeCatalog) {
        setRecipeCatalog({ recipes: recipeCatalog, error: '', loading: false });
      }
    }
    fetchRecipes();
  }, [setRecipeCatalog]);

  return (
    <div>
      { recipeCatalog.error && <Alert
        message="Error"
        description={ recipeCatalog.error }
        type="error"
        closable
        showIcon
      />}
      <List
        size="large"
        footer={ 
          <div>
            <Button type="primary">
              <Link to={ ROUTES.RECIPE_MANAGEMENT }>
            New Recipe
              </Link>
            </Button> 
          </div> 
        }
        loading={ recipeCatalog.loading }
        bordered
        dataSource={ recipeCatalog.recipes }
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 5,
        }}
        renderItem={recipe => (
          <RecipeGridShowcase
            recipe={ recipe }
            inCookingList={ props.cookingList.includes(recipe) } 
            />
        )}
      />
    </div>
  )
}
