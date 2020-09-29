import React, {Component} from 'react';
import gotService from '../../../services/gotService'
import ItemDetails from '../../itemDetails';
import Field from '../../field';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
       return (
        <ItemDetails 
            itemId={this.props.houseId}
            getData={this.gotService.getHouse}
        >
            <Field field='region' label='Region' />
            <Field field='words' label='Words' />
            <Field field='titles' label='Titles' />
            <Field field='ancestralWeapons' label='Ancestral Weapons' />
        </ItemDetails>
       )
    }
}