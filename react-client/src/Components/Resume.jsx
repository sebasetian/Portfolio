import React, { Component } from 'react'
import { Document, Page } from 'react-pdf/dist/entry.webpack'
import { Button } from 'semantic-ui-react'
import resume from '../pdf/Lin_Shih-Yao_Resume.pdf'
import '../Css/Resume.css'
export default class ResumePage extends Component {
    state = {
        pageNumber: 1,
    }
    render() {
        const { pageNumber } = this.state;
        return (
        <div class='resume'>
                <Button 
                    primary 
                    as='a'
                    href={resume}
                    target='_blank'>Download the PDF version</Button>
                <Document className='document' file={resume}>
                    <Page pageNumber={pageNumber} scale='1.8' />
                </Document>
        </div>
        )
    }
}