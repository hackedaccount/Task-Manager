import React, { Component } from 'react'

export default class ItemList extends Component {
    render() {
        return (
            <div>
                {this.props.listItems.map((item) => (
                    <li key={this.props.listItems.indexOf(item)}>{item}</li>
                ))}
            </div>
        )
    }
}
