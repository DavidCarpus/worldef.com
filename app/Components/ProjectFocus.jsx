import React from 'react';
import styles from './projects.css';

export default class ProjectFocus extends React.Component {
    render(){
        var out = ''
        out = JSON.stringify(this.props.project.focus.list);
        out = this.props.project.focus.list.
            map( (element, index) =>
            <li key={index}>{element}</li>
        )

        return (
            <div>
                <h2>Focus</h2>
                {this.props.project.focus.desc}
                <br/>
                <ul>{out}</ul>
            </div>
        )
    }
}

/*
"focus":{
    "desc":"TBD",
    "list":[
        "ListElement1",
        "ListElementN"
    ]
*/
