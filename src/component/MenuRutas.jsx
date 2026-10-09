import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li>
                    <a href='/'>HOME</a>
                </li>
                <li>
                    <a href='/DoctoresEspecialidad'>DOCTORES</a>
                </li>
            </ul>
        </div>
        )
    }
}