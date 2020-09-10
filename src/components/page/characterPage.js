import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ItemList from '../itemList';
import RandomItem from '../randomItem'
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom'
import Field from '../field/';

class CharacterPage extends Component {
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
                        minIndex={25}
                        maxIndex={1400}
                        getData={this.gotService.getCharacter}
                        name={'Character'}
                    >
                        <Field field='gender' label='Gender' />
                        <Field field='born' label='Born' />
                        <Field field='died' label='Died' />
                        <Field field='culture' label='Culture' />
                    </RandomItem>
                    </Col>
                    <Col md="6">
                        <ItemList 
                            onItemSelected={(id) => {
                                this.props.history.push(id)
                            }}
                            getData={this.gotService.getAllCharacters}
                            renderItem={({name}) => name}/> 
                    </Col>
                </Row>
            </>
        )
    }
}

export default withRouter(CharacterPage)