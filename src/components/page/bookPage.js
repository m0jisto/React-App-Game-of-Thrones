import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ItemList from '../itemList';
import RandomItem, {Properties} from '../randomItem'
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom'

class BookPage extends Component {
    gotService = new gotService()

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorMessage/>
            )
        }

        return (
            <>
                <Row>
                    <Col md="6">
                        <RandomItem
                            minIndex={1}
                            maxIndex={10}
                            getData={this.gotService.getBook}
                            name={'Book'}
                        >
                            <Properties field='numberOfPages' label='Number of pages' />
                            <Properties field='publiser' label='Publiser' />
                            <Properties field='released' label='Released' />
                        </RandomItem>
                    </Col>
                    <Col md="6">
                        <ItemList 
                            onItemSelected={(id) => {
                                this.props.history.push(id)
                            }}
                            getData={this.gotService.getAllBooks}
                            renderItem={({name}) => name}/> 
                    </Col>
                </Row>
            </>
        )
    }
}

export default withRouter(BookPage)