import './App.css';
import React, { Key } from 'react';
import { Layout } from 'antd';
import Navigation from './components/Navigation';

import foodRecipes from './data/dummyRecipes';
import Essensliste from './components/Essensliste';
import Kochliste from './components/Kochliste';
import { Recipe } from './types/recipe';

const { Header, Content } = Layout;

interface FoodAppState {
  currentPage: Key,
  kochliste: Recipe[]
}

class App extends React.Component<{}, FoodAppState> {
  state = {
    currentPage: 'foodCourt',
    kochliste: [{
        id: 'uuid',
        title: "Nudeln mit Reibekäse",
        description: "Sehr lecker bei jeder Gelegenheit",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3653&q=80",
        tags: ['Hauptspeise', 'Kinder']
    }]
  };

  handleNavigation = (page: Key) => {
    this.setState({ currentPage: page });
  }

  render() {
    const recipes = foodRecipes;
    return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Navigation 
          onNavigation={this.handleNavigation}
          currentMenu={this.state.currentPage}
          />
      </Header>
      <Content style={{ padding: '100px 50px' }}>
        { 
          this.state.currentPage === 'foodCourt' && 
          <Essensliste 
            kochliste={this.state.kochliste} 
            recipes={recipes}
          /> 
        } { 
          this.state.currentPage === 'kochListe' && 
          <Kochliste 
            kochliste={this.state.kochliste} 
          />
        }
      </Content>
    </Layout>
    )
  };
}

export default App;
