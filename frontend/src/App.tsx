import './App.css';
import { Layout } from 'antd';
import React, { Key, useState } from 'react';

import Navigation from 'components/Navigation';
import FoodCourt from 'components/FoodCourt';
import CookingList from 'components/CookingList';
import { Recipe } from 'types/recipe';
import { Ingredient } from 'types/ingredient';
import { foodRecipes, testIngredients} from 'data/dummyRecipes';
import RecipeManagement from 'components/RecipeManagement';
import ROUTES from 'routes';

const { Header, Content } = Layout;

interface FoodAppState {
  currentPage: Key,
  cookingList: Recipe[],
  zutatenliste: Ingredient[]
}
function App() {
  const [appState, setAppState] = useState<FoodAppState>({
    currentPage: ROUTES.FOOD_COURT, 
    cookingList: [
      foodRecipes[2]
    ],
    zutatenliste: testIngredients
  });


  
  const handleNavigation = (page: Key) => {
    setAppState({ ...appState, currentPage: page });
  }
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navigation 
          onNavigation={handleNavigation}
          currentMenu={appState.currentPage.toString()}
          />
      </Header>
      <Content style={{ padding: '100px 50px' }}>
   
        { appState.currentPage === ROUTES.FOOD_COURT && 
          <FoodCourt 
            cookingList={appState.cookingList} 
          /> } 
        { appState.currentPage === ROUTES.COOKING_LIST  && 
          <CookingList 
            cookingList={appState.cookingList}
            ingredientList={appState.zutatenliste}
          /> }
        { appState.currentPage === ROUTES.RECIPE_MANAGEMENT &&
          <RecipeManagement />  
        }
      </Content>
    </Layout>
  );
}

export default App;
