import React from 'react';
import { Icon, Menu, Popup } from 'semantic-ui-react';
import './App.css';
import SideBar from './widgets/side-bar/side-bar.js';
import { Page } from './models/page';

import {CopyToClipboard} from 'react-copy-to-clipboard';

const timeoutLength = 1500;

export default class App extends React.Component {

  emailMenuItemRef = React.createRef();

  constructor(props) {
    super(props);
    const menuItemsIds = Object.keys(Page).map(key => Page[key]);
    this.state = {
      selectedMenuItem: undefined,
      sideBarVisible: false,
      menuItemIds: menuItemsIds,
      emailCopied: false
    };
  }

  onCopy(text, result) {
    if (result) {
      this.setState({
        emailCopied: true
      });

      this.timeout = setTimeout(() => {
        this.setState({ emailCopied: false });
      }, timeoutLength);
    }
  }

  handlePopUpClose() {
    this.setState({ emailCopied: false });
    clearTimeout(this.timeout);
  }

  render() {
    // https://reactjs.org/docs/fragments.html
    return (
      <React.Fragment>
        <Popup
          context={this.emailMenuItemRef}
          content='Email Successfully Copied'
          position='top center'
          open={this.state.emailCopied}
          onClose={() => this.handlePopUpClose()}
        />
        <SideBar 
          visible= {this.state.sideBarVisible}
          menuItemIds = {this.state.menuItemIds}
          visibilityChanged = { (visibile) => this.setVisibility(visibile) } 
          menuItemClicked = { (menuItemId) => this.onMenuItemClicked(menuItemId) } />

        <Menu fixed='top' inverted widths={5}>
          <Menu.Item onClick={ () => this.toggleSidebarVisibility() }>
            <Icon 
                name='bars'
                size={'large'}/>
          </Menu.Item>
          <Menu.Item>
            Anthony Chen
          </Menu.Item>
          <CopyToClipboard
            onCopy={(text, result) => this.onCopy(text, result)}
            text='achen7x7@gmail.com'>
              <Menu.Item>
                <Icon name='mail'/>
                <span ref={this.emailMenuItemRef}>achen7x7@gmail.com</span>
              </Menu.Item>
          </CopyToClipboard>
          
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

