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
                            <Header as='h2' textAlign='center' image={avatar} content='About Me' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                        <p class='text'>
                            I enjoy solving some of the hardest, most challenging problems in technology. <br />
                            The kind of problems I want to solve require diverse perspectives and the team-spirit to see those differences as opportunities rather than roadblocks. <br />
                            I am looking forward to gaining hand-on experience and making tech impacts in software development,
                            also making some interesting projects applying NLP techniques I have learnt during my graduate studies. 
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <Header as='h2' textAlign='center' icon='code' content='Tech Stack' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}