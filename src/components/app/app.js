import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

// import gotService from '../../services/gotService'

export default class App extends Component {

    state = {
        click: true
    }

    onDelete = () => {
        this.setState((state) => {
            return {
                click: !state.click
            }
        })
    }


    render () {
        const char = this.state.click ? <RandomChar/> : null

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                onClick={this.onDelete}>Toggle RandomChar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
    
            </>
        );
    }
};