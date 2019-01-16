import React, { Component } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import '../Css/About.css'
import avatar from '../Images/android-chrome-192x192.png'
import expresspic from '../Images/06b9ed56-ced3-4078-bfc8-ca0055a69d61.png'
import kotlinpic from '../Images/200px-Kotlin-logo.svg.png'
import azurepic from '../Images/azure-subscription.png'
import androidpic from '../Images/iconfinder_android_317758.png'
import angularpic from '../Images/iconfinder_angular_1145600.png'
import bootstrappic from '../Images/7bc2b1f7cea97bb069769cdc626012db1d771c2d.png'
import firebasepic from '../Images/touchicon-180.png'
import javapic from '../Images/iconfinder_java_401285.png'
import jquerypic from '../Images/iconfinder_JQuery_logo_282806.png'
import jspic from '../Images/iconfinder_js_282802.png'
import nodepic from '../Images/iconfinder_nodejs-new-pantone-black_1012818.png'
import AWSpic from '../Images/iconfinder_Non-Service_Specific_copy__AWS_Cloud_259293.png'
import pythonpic from '../Images/iconfinder_Python_logo_282803.png'
import tspic from '../Images/typescript.png'
import reactpic from '../Images/react.png'
import rxpic from '../Images/tech-reactivex.png'
import techstackpic from '../Images/icon-technology-stack.jpg'
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
                    <Grid.Row className='tech' stretched>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <Header as='h2' textAlign='center' image={techstackpic} content='Tech Stack' />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Grid>
                                <Grid.Row verticalAlign='middle'>
                                    <Grid.Column width={2}>
                                        <h3>Web Frontend:</h3>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://rxjs-dev.firebaseapp.com'
                                            src={rxpic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image
                                            as='a'
                                            href='https://getbootstrap.com'
                                            src={bootstrappic}
                                            size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://www.jqueryscript.net'
                                            src={jquerypic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image 
                                            as='a'
                                            href='https://reactjs.org'
                                            src={reactpic}
                                            size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://angular.io'
                                            src={angularpic} size='small' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row verticalAlign='middle'>
                                    <Grid.Column width={2}>
                                        <h3>Web Backend:</h3>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://nodejs.org/'
                                            src={nodepic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='http://expressjs.com'
                                            src={expresspic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://firebase.google.com'
                                            src={firebasepic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='http://aws.amazon.com'
                                            src={AWSpic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://azure.microsoft.com'
                                            src={azurepic} size='small' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row verticalAlign='middle'>
                                    <Grid.Column width={2}>
                                        <h3>Mobile:</h3>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://developer.android.com'
                                            src={androidpic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://github.com/ReactiveX/RxJava'
                                            src={rxpic} size='small' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row verticalAlign='middle'>
                                    <Grid.Column width={2}>
                                        <h3>Programming languages:</h3>
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://www.java.com/'
                                            src={javapic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://www.javascript.com'
                                            src={jspic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='http://www.typescriptlang.org'
                                            src={tspic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://www.python.org'
                                            src={pythonpic} size='small' />
                                    </Grid.Column>
                                    <Grid.Column width={2}>
                                        <Image as='a'
                                            href='https://kotlinlang.org'
                                            src={kotlinpic} size='small' />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}