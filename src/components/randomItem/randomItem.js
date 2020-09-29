import React, { useState, useEffect } from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import './randomItem.css';

const RandomItem = ({getData, minIndex, maxIndex, name, children}) => {
    const [item, updateItem] = useState({});
    const [loading, updateLoad] = useState(true);
    const [error, updateError] = useState(false)


    useEffect(() => {
        updateCharacter()
        const timerId = setInterval(updateCharacter, 3000);

        return (() => clearInterval(timerId))
    }, [])

    const onCharLoaded = (data) => {
        updateItem(data);
        updateLoad(false);
    }

    const onError = () => {
        updateLoad(false);
        updateError(true)
    }

    const updateCharacter = () => {
        const id = Math.floor(Math.random()*maxIndex+minIndex);

        getData(id)
            .then(onCharLoaded)
            .catch(onError);
    }

    if (error) {
        return <ErrorMessage/>
    } else if (loading) {
        return <Spinner/>
    }

    return (
        <div className="random-block rounded">
            <h4>Random {name}: <br/>{item.name}</h4>
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

export default RandomItem;
