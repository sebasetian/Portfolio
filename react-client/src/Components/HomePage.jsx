import React, { Component } from 'react';
import {
    Button,
    Header,
    Responsive,
    Segment,
    Image,
    Icon
} from 'semantic-ui-react'
import '../Css/HomePage.css'
import photo from '../Images/photo.jpg' // Import using relative path
const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
const HomepageHeading = () => (
    <div class="Heading" >
        <Image src={photo} size='medium'
         style={{
            marginBottom: '3em',
            marginTop:'10%'
        }} 
        circular/>
        <Header
            as='h1'
            content='Shih-Yao Lin'
            style={{
                fontSize:  '4em',
                fontWeight: 'normal',
                marginBottom: 0
            }}
        />
        <Header
            as='h2'
            content='Computer Science Master Student with a passion for 
            Web, Mobile Development and Natural Language Processing'
            style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em'
            }}
        />
        <Header
            as='p'
            content='Welcome to my personal website! You can find my contact information, Resume and projects here'
            style={{
                fontSize: '1.3em',
                fontWeight: 'normal',
                marginBottom: '2em'
            }}
        />
    </div>
)
const OuterLink = () => (
    <div class='links'>
        <a href='mailto:sebasetian123@gmail.com' target='_top'>
            <Button icon>
                <Icon name='mail'/>Mail
            </Button>
        </a>
        <a href='https://www.linkedin.com/in/shih-yao-lin/' target='_blank'>
            <Button icon color='linkedin'>
                <Icon name='linkedin' />LinkedIn
            </Button>
        </a>
        <a href='https://github.com/sebasetian' target='_blank'>
            <Button icon>
                <Icon name='github' />Github
            </Button>
        </a>
        <a href='https://medium.com/@sebasetian123' target='_blank'>
            <Button icon color='medium'>
                <Icon name='medium' />Medium
            </Button>
        </a>
    </div>
)
class HomePage extends Component {
    render() {
        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <h5>Last updated: 1/16/2019</h5>
                <Segment className='HomePageSeg' vertical >
                    <HomepageHeading />
                    <OuterLink />
                </Segment>
            </Responsive>
        )
    }
}
export default HomePage;