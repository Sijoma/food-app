import './App.css';
import { Layout, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import axios, { AxiosError } from 'axios'
import React, { useEffect, Key, useState } from 'react';

import Navigation from './components/Navigation';
import Essensliste from './components/Essensliste';
import Kochliste from './components/Kochliste';
import { Recipe } from './types/recipe';
import { Ingredient } from './types/ingredient';
import { foodRecipes, testIngredients} from './data/dummyRecipes';
import RecipeManagement from './components/RecipeManagement';
import MainApi from 'services/API/http-client';

const { Header, Content } = Layout;

interface FoodAppState {
  currentPage: Key,
  kochliste: Recipe[],
  zutatenliste: Ingredient[]
}
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
function App() {
  const [recipeCatalog, setRecipeCatalog ] = useState<{loading: boolean, error: string, recipes: Recipe[]}>({
    loading: false,
    error: '',
    recipes: []
  })

  const [appState, setAppState] = useState<FoodAppState>({
    currentPage: 'foodCourt',
    kochliste: [],
    zutatenliste: testIngredients
  });

  useEffect(() => {
    setRecipeCatalog({recipes: [], error: '', loading: true });
    
    // Declare async function as React effect callbacks are synchronous to prevent race conditions 
    async function fetchRecipes(){
      const mainApi = MainApi.getInstance();
      const recipeCatalog = await mainApi.getRecipes()
        .catch((err: AxiosError) => setRecipeCatalog({loading: false, recipes: foodRecipes, error: "There was an error fetching the Recipe Catalog - Using stale data instead" + err.message}))
      if(recipeCatalog){
        setRecipeCatalog({recipes: recipeCatalog, error: '', loading: false });
      }
    }
    fetchRecipes();

  }, [setRecipeCatalog]);
  
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

        {recipeCatalog.loading && <Spin indicator={antIcon} />}

        {recipeCatalog.error && <Alert
          message="Error"
          description={recipeCatalog.error}
          type="error"
          closable
          showIcon
        />}
        { 
          appState.currentPage === 'foodCourt' && 
          <Essensliste 
            kochliste={appState.kochliste} 
            recipes={recipeCatalog.recipes}
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
