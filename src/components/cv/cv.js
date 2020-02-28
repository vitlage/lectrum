import React, {Component} from 'react';

export default class CV extends Component {
    state = {
        cvItems: [
            {id: 1, label: 'Name'},
            {id: 2, label: 'Phone'},
            {id: 3, label: 'Name'}
        ],
        values: ''
    };

    onChangeForm = (event) => {
        this.setState({
            values: event.target.value
        });
    };

    onSubmitForm = (event) => {
        event.preventDefault();

        const newItem = {
            id: Date.now(),
            label: this.state.values
        };

        this.setState(( {cvItems} ) => {
            const newArr = [
                ...cvItems,
                newItem
            ];

            return {
                cvItems: newArr
            }
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.cvItems.map(elm => {
                        return <li>{elm.label}</li>;
                    })}
                </ul>
                <form onSubmit={this.onSubmitForm}>
                    <label>
                        Add item to your CV: <input name="name" value={this.state.values} onChange={this.onChangeForm} className="form-control" />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}