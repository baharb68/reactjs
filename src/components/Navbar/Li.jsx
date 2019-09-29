import React, { Component } from 'react'

export default class Li extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <li class="nav-item px-2 ">
                <a class="nav-link px-2 py-1 text-gray" href="#">{this.props.link}</a>
            </li>
        )
    }
}
