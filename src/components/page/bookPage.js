import React, { Component } from 'react';
import RowBlock from '../rowBlock'
import ItemList from '../itemList';
import CharDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';

export default class BookPage extends Component {
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
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <CharDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getBook}
            >
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publiser' label='Publiser' />
                <Field field='released' label='Released' />
            </CharDetails>
        )

        return (
            <RowBlock
                itemList={itemList}
                itemDetails={itemDetails}/>
        )
    }
}