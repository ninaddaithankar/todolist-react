import React, { Component } from 'react'

export class AddTodo extends Component {
    
    state={
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title:'',
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        })
    }  
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                <input 
                    type="text"
                    placeholder="Enter new task"
                    style={{ flex:"10", padding:"1em"}}
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                ></input>
                <input 
                    type="submit"
                    style={{flex:"1", background : 'green', color : 'white', border : 'none', padding :'1em', fontWeight : 'bold', cursor : 'pointer'}}
                    value="Add"
                ></input>
            </form>
            
        )
    }
}

export default AddTodo
