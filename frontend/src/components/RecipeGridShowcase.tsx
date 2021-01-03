import React from 'react';
import { Button, Card, List } from 'antd';
import { Recipe } from 'types/recipe';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Tagliste from './Tagliste';

interface RecipeGridShowcaseProps {
    recipe: Recipe
    inCookingList: boolean
}

function RecipeGridShowcase(props: RecipeGridShowcaseProps){
    const recipe = props.recipe
    return (
        <List.Item key={recipe.id}>
        <Card title={recipe.name}
          hoverable
          style={{ width: 300 }}
          cover={<img alt="example"
            style={{ objectFit: 'cover' }}
            width={200}
            height={300}
            src={recipe.image ? recipe.image : "https://designshack.net/wp-content/uploads/placeholder-image.png"}
          />}>
          {recipe.description && <p>{recipe.description}</p>}
          <Button
            type={props.inCookingList ? undefined : 'primary' }
            shape="round"
            icon={<ShoppingCartOutlined />} size="large">
            {(props.inCookingList ? 'In cooking list' : 'Add to cooking list')}
          </Button>
          {recipe.tags && <Tagliste
            key={recipe.id}
            tags={recipe.tags}
          />}
        </Card>
      </List.Item>
    )
}

export default RecipeGridShowcase