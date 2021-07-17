import React from "react"
import ItemForm from "./ItemForm"
import ItemListItem from "./ItemListItems"

export default class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listItem : ["Wake up and smoke a cigg", "Go and get you shit done"]
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.removeItem = this.removeItem.bind(this)

    }

    onSubmit(e) {
        e.preventDefault()
        console.log(e.target.parentElement.elements.task.value)
        const newState = Object.assign({}, this.state)

		newState["listItem"].push(e.target.parentElement.elements.task.value)

        this.setState({
            ...this.state, ...newState
        }, () => {e.target.parentElement.elements.task.value = ""})
    }

    removeItem(item) {
        const newState = Object.assign({}, this.state)
        newState.listItem.splice(this.state.listItem.indexOf(item), 1)
        this.setState({...this.state, ...newState})
    }

    render() {
        const listItems = this.state.listItem

        return (
            <div>
                <ItemForm onSubmit={this.onSubmit} />
                {listItems.map((item) => (
                    <ItemListItem key={listItems.indexOf(item)} removeItem={this.removeItem} item={item} />
                ))}
            </div>
        )
    }
}
