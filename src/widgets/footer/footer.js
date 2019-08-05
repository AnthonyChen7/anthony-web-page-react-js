import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './footer.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  onMenuItemClicked(itemId) {
    this.props.menuItemClicked(itemId);
  }

  render() {
    return this.props.items && this.props.items.length > 0 ? (
      <>
      <Menu fixed='top' widths={this.props.items.length}>
        this.props.items.map((item) => 
        <Menu.Item
          disabled = {item.disabled}
          className = {item.disabled ? 'no-pointer-event' : '' }
          onClick={ () => this.onMenuItemClicked(item.id) }>
          {item.iconName ? <Icon name={item.iconName}/> : null}
          {item.label}
        </Menu.Item>);
      </Menu>
      </>
    ) : null;
  }
}