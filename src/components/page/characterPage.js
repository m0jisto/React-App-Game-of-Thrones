import React, { Component } from 'react';
import RowBlock from '../rowBlock'
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';

export default class CharacterPage extends Component {
    gotService = new gotService()

    state = {
        selectedItem: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => {
        this.setState({selectedItem: id})
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorMessage/>
            )
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getCharacter}
            >
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock
                itemList={itemList}
                itemDetails={itemDetails}/>
        )
    }
}