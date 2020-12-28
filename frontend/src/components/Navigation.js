import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Navigation extends React.Component {
    state = {
      current: 'foodCourt',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({ current: e.key });
      this.props.onNavigation(e.key);
    };
  
    render() {
      
      return (
          <Wrapper>
            <Menu 
            onClick={this.handleClick} 
            selectedKeys={[current]} 
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
  