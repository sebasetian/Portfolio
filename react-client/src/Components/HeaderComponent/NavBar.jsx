import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Rail } from 'semantic-ui-react'
class NavBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <header>
        <Segment inverted>
          <Menu widths={4} inverted size='massive'>
            <Menu.Item
              name ='home'
              onClick = {this.handleItemClick}
            >
            <Link to="">Main</Link>
            </Menu.Item>
            <Menu.Item
              name='about'
              onClick={this.handleItemClick}
            >
              <Link to="">About</Link>
            </Menu.Item>
            <Menu.Item
              name='projects'
              onClick={this.handleItemClick}
            >
              <Link to="">Projects</Link>
            </Menu.Item>
            <Menu.Item
              name='resume'
              active={activeItem === 'resume'}
              onClick={this.handleItemClick}
            >
              <Link to="">Resume/CV</Link>
            </Menu.Item>
          </Menu>
        </Segment>
      </header>
    )
  }
}
export default NavBar;