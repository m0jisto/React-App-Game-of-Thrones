import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import './randomItem.css';

export default class RandomItem extends Component {
    state = {
        item: {},
        loading: true
    }

    componentDidMount() {
        this.updateCharacter()
        this.timerId = setInterval(this.updateCharacter, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    onCharLoaded = (item) => {
        this.setState({
            item,
            loading: false,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter = () => {
        const {getData, minIndex, maxIndex} = this.props

        const id = Math.floor(Math.random()*maxIndex+minIndex);

        console.log(getData)

        getData(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        const {item, loading, error} = this.state;

        if (error) {
            return <ErrorMessage/>
        } else if (loading) {
            return <Spinner/>
        }

        const {name} = item

        return (
            <div className="random-block rounded">
                <h4>Random {this.props.name}: <br/>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}