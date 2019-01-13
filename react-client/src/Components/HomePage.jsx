import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
const HomepageHeading = () => (
    <Container text>
        <Header
            as='h1'
            content='Imagine-a-Company'
            style={{
                fontSize:  '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em',
            }}
        />
        <Button primary size='huge'>
            Get Started
<Icon name='right arrow' />
        </Button>
    </Container>
)

class HomePage extends Component {
    render() {
        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <HomepageHeading />
                    </Segment>
                </Visibility>
            </Responsive>
        )
    }
}
export default HomePage;