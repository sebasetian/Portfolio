import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import '../Css/About.css'
import avatar from '../Images/android-chrome-192x192.png'

export default class AboutPage extends Component {
    render() {
        return (
            <div class='about'>
                <Grid divided='vertically'>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <Header as='h2' textAlign='center' image={avatar} content='About me' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            I enjoy solving some of the hardest, most challenging problems in technology.
                            The kind of problems I want to solve require diverse perspectives and the team-spirit to see those differences as opportunities rather than roadblocks.
                            I am looking forward to gaining hand-on experience and making tech impacts in software development,
                            also making some interesting projects applying NLP techniques I have learnt during my graduate studies. 
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}