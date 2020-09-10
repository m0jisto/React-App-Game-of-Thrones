import React, {Component} from 'react';
import gotService from '../../services/gotService'
import ItemDetails from '../itemDetails';
import Field from '../field/';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
       return (
        <ItemDetails 
            itemId={this.props.charaterId}
            getData={this.gotService.getCharacter}
        >
            <Field field='gender' label='Gender' />
            <Field field='born' label='Born' />
            <Field field='died' label='Died' />
            <Field field='culture' label='Culture' />
        </ItemDetails>
       )
    }
}