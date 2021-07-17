import React, {Component} from 'react'

export default class ItemListItem extends Component {
    constructor(){
        super()
        this.state = { 
            toggle: false
        }
        this.toggle = this.toggle.bind(this)
        this.removeItem = this.removeItem.bind(this)

    }
    removeItem() {
        this.props.removeItem(this.props.item)
    }
    toggle(e) {
        const newState = {}

        newState["toggle"] = !this.state["toggle"];
        this.setState({...this.state, ...newState});
    }

    render() {
        return (
            <div>
                <input onChange={this.toggle} checked={this.state.toggle} type="checkbox" value={this.state.toggle} />
                {!this.state.toggle ? <li>{this.props.item}</li> : <li><strike>{this.props.item}</strike></li>}
                <button onClick={this.removeItem}>X</button>
            </div>
        )
    }
}
