import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BookPage, HousePage} from '../page/'
import gotService from '../../services/gotService'

import {
    BrowserRouter as Router, 
    Route,
    Redirect
} from 'react-router-dom'

import './app.css'

export default class App extends Component {
    gotService = new gotService()

    render () {
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                <Route path="/characters" component={RandomChar}/>
                            </Col>
                        </Row>


                        <Route path="/" exact component={ () => <h1 className="title">Welcome to world Game of Thrones!</h1>}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' component={BookPage}/>
                        <Route path='/houses' component={HousePage}/>

                        <Redirect to="/"/>
                    </Container>
                </div>
            </Router>
        );
    }
};

/* <> 
    <Container>
        <Header />
    </Container>
    <Container>
        <Row>
            <Col lg={{size: 5, offset: 0}}>
                {char}
                <Button className="bg-primary mb-3"
                    onClick={this.onDelete}>Toggle RandomChar</Button>
            </Col>
        </Row>
        <CharacterPage/>
        <BookPage/>
        <HousePage/>
    </Container>
</> */