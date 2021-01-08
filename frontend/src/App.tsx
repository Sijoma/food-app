import './App.css';
import { Layout } from 'antd';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Navigation from 'components/Navigation';
import FoodCourt from 'pages/FoodCourt';
import CookingList from 'pages/CookingList';
import { foodRecipes, testIngredients } from 'data/dummyRecipes';
import RecipeManagement from 'pages/RecipeManagement';
import ROUTES from 'routes';
import EnvironmentDisplay from 'components/EnvironmentDisplay';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

function App() {
  const cookingList = [foodRecipes[2]]

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navigation />
      </Header>
      <Content style={{ padding: '100px 50px' }}>
        
        <Switch>
          <Route path={ROUTES.FOOD_COURT}>
            <FoodCourt
              cookingList={cookingList} />
          </Route>
          <Route path={ROUTES.COOKING_LIST}>
            <CookingList
              cookingList={cookingList}
              ingredientList={testIngredients}
            />
          </Route>
          <Route path={ROUTES.RECIPE_MANAGEMENT}>
            <RecipeManagement />
          </Route>
        </Switch>
      </Content>
      <Footer>
        {process.env.NODE_ENV === 'development' && <EnvironmentDisplay />}
      </Footer>
    </Layout>
  );
}

export default App;
