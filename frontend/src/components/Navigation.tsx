import React, { Component, Key } from 'react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface NavigationProps {
  onNavigation: (e: Key) => void
  currentMenu: string
}


class Navigation extends Component<NavigationProps> { 
    handleClick = (e: MenuInfo) => {
      this.props.onNavigation(e.key);
    };
  
    render() {
      return (
          <Wrapper>
            <Menu 
            onClick={this.handleClick}
            selectedKeys={[this.props.currentMenu]} 
            mode="horizontal">
            <Menu.Item 
                key="foodCourt" 
                icon={<AppstoreOutlined />}>
                Food Court
            </Menu.Item>
            <Menu.Item key="kochListe" icon={<UnorderedListOutlined />}>
                Kochliste
            </Menu.Item>
            </Menu>
          </Wrapper>
      );
    }
  }

export default Navigation;
  