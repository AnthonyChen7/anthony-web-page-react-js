import React from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
// https://alligator.io/react/react-burger-menu-sidebar/
// https://react.semantic-ui.com/usage
export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    // TODO move visible state to be a part of the prop
    this.state = {
      visible: false
    };
  }

  toggleVisibility () {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <>
      <Button 
      onClick={ () => this.toggleVisibility() }>
        Toggle sidebar visibililty
      </Button>
      {/* <Sidebar.Pushable as={Segment}> */}
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => this.toggleVisibility()}
            vertical
            visible={this.state.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          {/* <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        {/* </Sidebar.Pushable> */}
      </>
    );
  }
}