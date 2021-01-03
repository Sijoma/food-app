import './App.css';
import { Layout } from 'antd';
import React, { Key, useState } from 'react';

import Navigation from 'components/Navigation';
import Essensliste from 'components/Essensliste';
import Kochliste from 'components/Kochliste';
import { Recipe } from 'types/recipe';
import { Ingredient } from 'types/ingredient';
import { testIngredients} from 'data/dummyRecipes';
import RecipeManagement from 'components/RecipeManagement';
import ROUTES from 'routes';

const { Header, Content } = Layout;

interface FoodAppState {
  currentPage: Key,
  kochliste: Recipe[],
  zutatenliste: Ingredient[]
}
function App() {
  const [appState, setAppState] = useState<FoodAppState>({
    currentPage: ROUTES.FOOD_COURT, 
    kochliste: [],
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
          <Essensliste 
            kochliste={appState.kochliste} 
          /> } 
        { appState.currentPage === ROUTES.COOKING_LIST  && 
          <Kochliste 
            kochliste={appState.kochliste}
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
