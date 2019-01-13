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
          <Menu inverted>
            <Menu.Item>
              Shih-Yao (Sebastian) Lin
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name ='home'
                active = {activeItem === 'home'}
                onClick = {this.handleItemClick}
              >
                <Link to="">Home</Link>
              </Menu.Item>
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                <Link to="">About</Link>
              </Menu.Item>
              <Menu.Item
                name='projects'
                active={activeItem === 'projects'}
                onClick={this.handleItemClick}
              >
                <Link to="">Projects</Link>
              </Menu.Item>
              <Menu.Item
                name='blog'
                active={activeItem === 'blog'}
                onClick={this.handleItemClick}
              >
                <Link to="">Blog</Link>
              </Menu.Item>
              <Menu.Item
                name='resume'
                active={activeItem === 'resume'}
                onClick={this.handleItemClick}
              >
                <Link to="">Resume/CV</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          
        </Segment>
      </header>
    )
  }
}
export default NavBar;