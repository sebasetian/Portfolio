import React, { Component } from 'react'
import { Card, Button, Image,Grid } from 'semantic-ui-react'
import '../Css/Project.css'
import solrimg from '../Images/Projects/Lucene.png'
import bootstrappic from '../Images/7bc2b1f7cea97bb069769cdc626012db1d771c2d.png'
import nodepic from '../Images/iconfinder_nodejs-new-pantone-black_1012818.png'
import jquerypic from '../Images/iconfinder_JQuery_logo_282806.png'
import androidprojectpic from '../Images/Projects/android.png'
import androidprojectpic2 from '../Images/Projects/android2.png'
import androidprojectpic3 from '../Images/Projects/android3.png'
import angularprojectpic from '../Images/Projects/angular.png'
import expresspic from '../Images/06b9ed56-ced3-4078-bfc8-ca0055a69d61.png'
import azurepic from '../Images/azure-subscription.png'
import androidpic from '../Images/iconfinder_android_317758.png'
import angularpic from '../Images/iconfinder_angular_1145600.png'
import rxpic from '../Images/tech-reactivex.png'
export default class ProjectPage extends Component {
    render() {
        return (
            <div class='project'>
                <Card.Group itemsPerRow={2}>
                    <Card>
                        <Grid columns={3}>
                            <Grid.Column>
                                <Image src={androidprojectpic2} size='medium'/>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={androidprojectpic3} size='medium' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={androidprojectpic} size='medium'/>
                            </Grid.Column>
                        </Grid>
                        <Card.Content>
                            <Card.Header>The event searcher on Android</Card.Header>
                            <Card.Meta>tech stack: <Image src={androidpic} size='mini' />,<Image src={nodepic} size='mini' />,
                            <Image src={rxpic} size='mini' />,<Image src={expresspic} size='mini' /> </Card.Meta>
                            <Card.Description>
                                A simple event searcher mobile app. <br />
                                Users can enter keyword and category, distance from the current location.... for searching nearby events on Ticketmaster.<br />
                                Users can also check the event detail or add some events into their favorite list. <br />
                                This app provides "tweet function" - Users are able to share their favorite events on Twitter.
                            </Card.Description>
                            <Button
                                primary
                                as='a'
                                href='https://github.com/sebasetian/android-event-searcher'
                                target='_blank'>GitHub</Button>
                            
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src={angularprojectpic} size='massive' />
                        <Card.Content>
                            <Card.Header>The event searcher with Angular 7</Card.Header>
                            <Card.Meta>tech stack: <Image src={bootstrappic} size='mini' />,<Image src={nodepic} size='mini' />,
                            ,<Image src={expresspic} size='mini' />,<Image src={rxpic} size='mini' />,<Image src={angularpic} size='mini' />,
                            <Image src={azurepic} size='mini' />  </Card.Meta>
                            <Card.Description>
                                A simple event searcher Angular/Nodejs app. <br />
                                Users can enter keyword and category, distance from the current location.... for searching nearby events on Ticketmaster.<br />
                                Users can also check the event detail or add some events into their favorite list. <br />
                                This app provides "tweet function" - Users are able to share their favorite events on Twitter. <br />
                                It is deployed to Azure. The link to the demo page is provided.
                            </Card.Description>
                            <Button
                                primary
                                as='a'
                                href='https://github.com/sebasetian/angular-event-searcher'
                                target='_blank'>GitHub</Button>
                            <Button
                                secondary
                                as='a'
                                href='http://csci571hw8shihyaol.azurewebsites.net'
                                target='_blank'>Demo</Button>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src={solrimg} size='massive' />
                        <Card.Content>
                            <Card.Header>Solr search engine for Mercury News</Card.Header>
                            <Card.Meta>tech stack: NLP, <Image src={bootstrappic} size='mini' />,<Image src={nodepic} size='mini' />,
                            <Image src={jquerypic} size='mini' />  </Card.Meta>
                            <Card.Description>
                                A simple search engine based on Solr engine. <br />
                                Users can enter text querys for searching news in Mercury News website.<br />
                                Stemming & Lemmatisation are used to improve search result. <br />
                                Autocomplete and error correction are also provided. Error correction feature is implement base on Norvig's algorithm.
                            </Card.Description>
                            <Button
                                primary
                                as='a'
                                href='https://github.com/sebasetian/Solr-search-engine'
                                target='_blank'>GitHub</Button>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}