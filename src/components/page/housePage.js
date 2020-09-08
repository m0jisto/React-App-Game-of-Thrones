import React, { Component } from 'react';
import RowBlock from '../rowBlock'
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';

export default class HousePage extends Component {
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
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
                <Field field='ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
        )

        return (
            <RowBlock
                itemList={itemList}
                itemDetails={itemDetails}/>
        )
    }
}