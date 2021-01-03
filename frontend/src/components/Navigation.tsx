import React, { Key } from 'react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import ROUTES from 'routes';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface NavigationProps {
  onNavigation: (e: Key) => void
  currentMenu: string
}


function Navigation(props: NavigationProps) {
  const handleClick = (e: MenuInfo) => {
    props.onNavigation(e.key);
  };

  return (
    <Wrapper>
      <Menu
        onClick={handleClick}
        selectedKeys={[props.currentMenu]}
        mode="horizontal">
        <Menu.Item
          key={ROUTES.FOOD_COURT}
          icon={<AppstoreOutlined />}>
          Food Court
        </Menu.Item>
        <Menu.Item key={ROUTES.COOKING_LIST} icon={<UnorderedListOutlined />}>
          Cooking List
        </Menu.Item>
        <Menu.Item key={ROUTES.RECIPE_MANAGEMENT} icon={<UnorderedListOutlined />}>
          Recipe Management
        </Menu.Item>
      </Menu>
    </Wrapper>
  );
}

export default Navigation;
