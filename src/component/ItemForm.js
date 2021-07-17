import React, { Component } from 'react'

export default class ItemForm extends Component {
    render() {
        return (
            <form>
                <label>
                    Enter List Item
                    <input type="text" name="task" />
                </label>
                <input onClick={this.props.onSubmit} type="submit" value="submit" />
            </form>
        )
    }
}
