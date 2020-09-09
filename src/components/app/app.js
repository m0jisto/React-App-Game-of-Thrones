import React, { Component } from 'react';
import {Container} from 'reactstrap'
import Header from '../header';
import {CharacterPage, CharacterItem, BookPage, BooksItem, HousePage, HouseItem} from '../page/'


import {
    BrowserRouter as Router, 
    Route,
    Redirect
} from 'react-router-dom'

import './app.css'

export default class App extends Component {
    render () {
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header />
                        
                        <Route path="/" exact component={ () => 
                            <>
                                <h1 className="title">Welcome to the world <br/> "Game of Thrones!"</h1>
                                <h2 className="subtitle">Select the category you are interested in</h2>
                            </>
                        }/>

                        <Route path='/characters' exact component={CharacterPage}/>
                        <Route path='/characters/:id' exact render={ 
                            ({match}) => {
                                const {id} = match.params
                                return <CharacterItem charaterId={id}/>
                            }
                        }/>

                        <Route path='/houses' exact component={HousePage}/>
                        <Route path='/houses/:id' exact render={ 
                            ({match}) => {
                                const {id} = match.params
                                return <HouseItem houseId={id}/>
                            }
                        }/>

                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' exact render={ 
                            ({match}) => {
                                const {id} = match.params
                                return <BooksItem bookId={id}/>
                            }
                        }/>

                        <Redirect to='/' />
                    </Container>
                </div>
            </Router>
        );
    }
};