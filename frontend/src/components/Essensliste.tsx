import React from 'react';
import { List, Divider, Card, Tag } from 'antd';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Recipe } from '../types/recipe';
import Tagliste from './Tagliste';



interface EssenslisteProps {
  recipes: Recipe[]
  kochliste: Recipe[]
}

export default function EssensListe(props: EssenslisteProps){
    return (
        <div>
            <List
              size="large"
              footer={<div><Button type="primary">Neues Rezept</Button></div>}
              bordered
              dataSource={props.recipes}
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
                <List.Item  key="item.title">
                    
                    <Card title={item.title}
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="example" 
                            style={{ objectFit: 'cover' }} 
                            width={300}
                            height={400}
                            src={item.image ? item.image : "https://designshack.net/wp-content/uploads/placeholder-image.png"} 
                            />}>   
                    <Button 
                        type={(props.kochliste.findIndex(recipe => recipe.title === item.title) ? undefined : 'primary')} 
                        shape="round" 
                        icon={<ShoppingCartOutlined />} size="large">
                        {(props.kochliste.findIndex((recipe: any)=> recipe.title === item.title) ? ' In Kochliste' : ' Zur Kochliste hinzufügen')}
                    </Button>
                    <Divider></Divider>
                    <Tag color={item.einhandvertraeglichkeit ? 'green' : 'red'}>{item.einhandvertraeglichkeit ? 'Einhand' : 'Zweihändig'}</Tag>
                    <Tagliste 
                      tags={item.tags}
                      />
                    </Card>
                </List.Item>
              )}
            />
        </div>

    )
}
