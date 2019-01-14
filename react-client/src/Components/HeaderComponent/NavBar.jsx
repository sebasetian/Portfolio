import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
class NavBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    if (name == 'home') name = ''
    this.props.history.push("/" + name);
  }
  
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
              Main
            </Menu.Item>
            <Menu.Item
              name='about'
              onClick={this.handleItemClick}
              
            >
              About
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
export default withRouter(NavBar);