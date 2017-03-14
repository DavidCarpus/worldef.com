import React from 'react';
import styles from './projects.css';

export default class ProjectFocus extends React.Component {
    render(){
        var out = ''
        out = JSON.stringify(this.props.project.focus.list);
        out = this.props.project.focus.list.
            map( (element, index) =>
            <li key={index}><p>{element}</p></li>
        )

        return (
            <div className={styles.projectFocus}>
                <h2>Focus</h2>
                <p>{this.props.project.focus.desc}</p>
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
