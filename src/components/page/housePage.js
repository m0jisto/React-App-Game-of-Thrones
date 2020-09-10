import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import ItemList from '../itemList';
import RandomItem from '../randomItem'
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom'
import Field from '../field/';

class HousePage extends Component {
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
                        getData={this.gotService.getHouse}
                        name={'House'}
                    >
                        <Field field='region' label='Region' />
                        <Field field='words' label='Words' />
                        <Field field='titles' label='Titles' />
                        <Field field='ancestralWeapons' label='Ancestral Weapons' />
                    </RandomItem>
                    </Col>
                    <Col md="6">
                        <ItemList 
                            onItemSelected={(id) => {
                                this.props.history.push(id)
                            }}
                            getData={this.gotService.getAllHouses}
                            renderItem={({name}) => name}/> 
                    </Col>
                </Row>
            </>
        )
    }
}

export default withRouter(HousePage)