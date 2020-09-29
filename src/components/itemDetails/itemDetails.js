import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';

import './itemDetails.css'

const ItemDetails = ({ itemId, getData, children }) =>  {
    const [item, updateItem] = useState(null)

    useEffect(() => {
        if (!itemId) {
            return
        }

        getData(itemId)
            .then(item => updateItem(item))
    }, [])

    if (!item) {
        return <Spinner/>
    }

    const {name} = item

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}

export default ItemDetails;
