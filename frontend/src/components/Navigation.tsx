import React from 'react';
import { Menu } from 'antd';
import {
  Link,
  useLocation
} from "react-router-dom";
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ROUTES from 'routes';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Navigation() {
  let location = useLocation();

  return (
    <Wrapper>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal">
        <Menu.Item
          key={ROUTES.FOOD_COURT}
          icon={<AppstoreOutlined />}>
          <Link to={ ROUTES.FOOD_COURT }>Food Court</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.COOKING_LIST} icon={<UnorderedListOutlined />}>
        <Link to={ ROUTES.COOKING_LIST }>
          Cooking List
          </Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.RECIPE_MANAGEMENT} icon={<UnorderedListOutlined />}>
          <Link to={ ROUTES.RECIPE_MANAGEMENT }>
          Recipe Management
          </Link>
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
}

export default Navigation;
