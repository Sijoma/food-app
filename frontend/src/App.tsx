import './App.css';
import { Layout } from 'antd';
import React, { useState } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Navigation from 'components/Navigation';
import FoodCourt from 'components/FoodCourt';
import CookingList from 'components/CookingList';
import { Recipe } from 'types/recipe';
import { Ingredient } from 'types/ingredient';
import { foodRecipes, testIngredients } from 'data/dummyRecipes';
import RecipeManagement from 'components/RecipeManagement';
import ROUTES from 'routes';
import EnvironmentDisplay from 'components/EnvironmentDisplay';

const { Header, Content } = Layout;

interface FoodAppState {
  cookingList: Recipe[],
  zutatenliste: Ingredient[]
}
function App() {

  const [appState, ] = useState<FoodAppState>({
    cookingList: [
      foodRecipes[2]
    ],
    zutatenliste: testIngredients
  });

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navigation />
      </Header>
      <Content style={{ padding: '100px 50px' }}>
        {process.env.NODE_ENV === 'development' && <EnvironmentDisplay />}
        <Switch>
          <Route path={ROUTES.FOOD_COURT}>
            <FoodCourt
              cookingList={appState.cookingList} />
          </Route>
          <Route path={ROUTES.COOKING_LIST}>
            <CookingList
              cookingList={appState.cookingList}
              ingredientList={appState.zutatenliste}
            />
          </Route>
          <Route path={ROUTES.RECIPE_MANAGEMENT}>
            <RecipeManagement />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
