import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
// https://react.semantic-ui.com/usage

// TODO remove
const Ids = {
  a: '1',
  b: '2',
  c: '3'
};
export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      activeId: undefined
    };
  }
  /**
   * only called once
   * no access to DOM or childfren refs
   * init props and states are defined
   * 
   */
  componentWillMount() {
    this.setState({
      visible: this.props.visible === undefined ? false : this.props.visible
    });
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (prevProps.visible !== this.props.visible) {
      this.setVisibility(this.props.visible);
    }
  }

  setVisibility (visible) {
    this.setState({
      visible: visible
    });
    this.props.visibilityChanged(visible);
  }

  setActiveMenuItem(id) {
    this.setState({
      activeId: id
    });
  }

  render() {
    return (
      <>
      {/* <Sidebar.Pushable as={Segment}> */}
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => {this.setVisibility(false)}}
            vertical
            visible={this.state.visible}
            width='thin'
          >
            {/* TODO set active boolean */}
            <Menu.Item 
              as=''
              active = {this.state.activeId === Ids.a}
              onClick = {() => { this.setVisibility(false); this.setActiveMenuItem(Ids.a) } }>
              Home
            </Menu.Item>
            <Menu.Item 
              as=''
              active = {this.state.activeId === Ids.b}
              onClick = {() => { this.setVisibility(false); this.setActiveMenuItem(Ids.b) } }>
              Games
            </Menu.Item>
            <Menu.Item 
              as=''
              active = {this.state.activeId === Ids.c}
              onClick = {() => { this.setVisibility(false); this.setActiveMenuItem(Ids.c) } }>
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