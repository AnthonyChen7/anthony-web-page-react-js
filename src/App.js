import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './App.css';
import SideBar from './widgets/side-bar/side-bar.js';
import { Page } from './models/page';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    const menuItemsIds = Object.keys(Page).map(key => Page[key]);
    this.state = {
      selectedMenuItem: undefined,
      sideBarVisible: false,
      menuItemIds: menuItemsIds
    };
  }

  render() {
    // https://reactjs.org/docs/fragments.html
    return (
      <React.Fragment>
        <div
          className="menu-container"
          onClick={ () => this.toggleSidebarVisibility() }>
          <Icon 
            name='bars'
            size={'large'}/>
        </div>
        <SideBar 
          visible= {this.state.sideBarVisible}
          menuItemIds = {this.state.menuItemIds}
          visibilityChanged = { (visibile) => this.setVisibility(visibile) } 
          menuItemClicked = { (menuItemId) => this.onMenuItemClicked(menuItemId) } />

        <Menu fixed='bottom' inverted widths={4}>
          {/* <Menu.Item onClick={ () => this.toggleSidebarVisibility() }>
            <Icon 
                name='bars'
                size={'large'}/>
          </Menu.Item> */}
          <Menu.Item>
            Anthony Chen
          </Menu.Item>
          <Menu.Item>
            <Icon name='mail'/>
            achen7x7@gmail.com
          </Menu.Item>
          <Menu.Item href='https://github.com/AnthonyChen7' target='_blank'>
            <Icon name='github' />
            My Github
          </Menu.Item>
          <Menu.Item href='https://www.linkedin.com/in/anthony-chen-94a03a7b/' target='_blank' >
            <Icon name='linkedin' />
            My LinkedIn
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
  
  toggleSidebarVisibility() {
    this.setState({
      sideBarVisible: !this.state.sideBarVisible
    });
  }

  setVisibility (visible) {
    this.setState({
      sideBarVisible: visible
    });
  }

  onMenuItemClicked(menuItemId) {
    this.setState({
      selectedMenuItem: menuItemId
    });
  }

}

