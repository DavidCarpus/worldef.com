import React from 'react';
import styles from './projects.css';

// <li>{this.props.statistic} = {this.props.value} </li>

class ProjectStatistic extends React.Component {
    render() {
        // <p dangerouslySetInnerHTML={{__html: teamMemberText}} ></p>
            // {this.props.statistic}</div>
            var desc=this.props.statistic
        return (
            <div className={styles.projectStatistic}>
                <div className={styles.projectStatisticDesc} dangerouslySetInnerHTML={{__html: desc}}></div>
                <div className={styles.projectStatisticValue}>{this.props.value}</div>
            </div>
        )
    }

}

export default class ProjectStatistics extends React.Component {
    render(){
        var out = Object.keys(this.props.project.statistics).
                map( (key, index) =>
                <ProjectStatistic key={index} statistic={key} value={this.props.project.statistics[key]} />
            )

        return (
            <div>
                <h2>Statistics</h2>
                <div className={styles.projectStatisticBlock}>{out}</div>
            </div>
        )
    }
}
/*
"statistics": {
    "":""
}
*/
