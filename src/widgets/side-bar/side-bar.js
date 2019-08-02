import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
// https://react.semantic-ui.com/usage

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
    if (JSON.stringify(prevProps.menuItemIds) !== JSON.stringify(this.props.menuItemIds)) {
      this.props.menuItemClicked(undefined);
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
    this.props.menuItemClicked(id);
  }

  render() {
    return this.props.menuItemIds && this.props.menuItemIds.length > 0 ? (
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
            {this.props.menuItemIds.map(menuItemId => 
              <Menu.Item 
              as=''
              key={menuItemId}
              active = {this.state.activeId === menuItemId}
              onClick = {() => { this.setVisibility(false); this.setActiveMenuItem(menuItemId) } }>
              {menuItemId}
            </Menu.Item>)}
          </Sidebar>

          {/* <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher> */}
        {/* </Sidebar.Pushable> */}
      </>
    ) : null;
  }
}