import './App.css';
import { Layout } from 'antd';
import React, { Key, useState } from 'react';

import Navigation from './components/Navigation';
import Essensliste from './components/Essensliste';
import Kochliste from './components/Kochliste';
import { Recipe } from './types/recipe';
import { Ingredient } from './types/ingredient';
import { testIngredients} from './data/dummyRecipes';
import RecipeManagement from './components/RecipeManagement';


const { Header, Content } = Layout;

interface FoodAppState {
  currentPage: Key,
  kochliste: Recipe[],
  zutatenliste: Ingredient[]
}
function App() {


  const [appState, setAppState] = useState<FoodAppState>({
    currentPage: 'foodCourt',
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

   
        { 
          appState.currentPage === 'foodCourt' && 
          <Essensliste 
            kochliste={appState.kochliste} 
          /> 
        } { 
          appState.currentPage === 'kochListe' && 
          <Kochliste 
            kochliste={appState.kochliste}
            ingredientList={appState.zutatenliste}
          />
        }
        { appState.currentPage === 'recipe-management' &&
          <RecipeManagement />  
        }
      </Content>
    </Layout>
  );
}

export default App;
