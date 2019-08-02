import React from 'react';
import { Icon } from 'semantic-ui-react';
import './App.css';
import SideBar from './widgets/side-bar/side-bar.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideBarVisible: false,
      menuItemIds: ["1", "2", "3"]
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
    console.log(menuItemId);
  }

}

