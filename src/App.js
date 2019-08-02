import React from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import SideBar from './widgets/side-bar/side-bar.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideBarVisible: false
    };
  }

  render() {
    // https://reactjs.org/docs/fragments.html
    return (
      <React.Fragment>
        <Button 
          onClick={ () => this.toggleSidebarVisibility() }>
          Toggle sidebar visibililty
        </Button>
        <SideBar 
          visible= {this.state.sideBarVisible}
          visibilityChanged = { (visibile) => this.setVisibility(visibile) } />
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

}

