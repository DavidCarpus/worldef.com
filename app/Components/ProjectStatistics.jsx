import React from 'react';
import styles from './projects.css';

export default class ProjectStatistics extends React.Component {
    render(){
        var out = ''
        // out = JSON.stringify(this.props.project.initiated);
        if (this.props.project.statistics != null ) {
            out = Object.keys(this.props.project.statistics).
                map( (key, index) =>
                <li key={index}>{key} = {this.props.project.statistics[key]} </li>
            )
        } else {
            out = JSON.stringify(this.props.project);
        }

        return (
            <div>                
                <h2>Statistics</h2>
                <ul>{out}</ul>
            </div>
        )
    }
}
/*
"statistics": {
    "":""
}
*/
