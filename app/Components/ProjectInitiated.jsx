import React from 'react';
import styles from './projects.css';

export default class ProjectInitiated extends React.Component {
    render(){
        var out = ''
        // out = JSON.stringify(this.props.project.initiated);
        if (this.props.project.initiated != null && this.props.project.initiated.list != null ) {
            out = this.props.project.initiated.list.
                map( (element, index) =>
                <li key={index}>{element}</li>
            )
        }

        return (
            <div className={styles.projectInitiated}
                >
                <h2>Initiated</h2>
                <p>{ (this.props.project.initiated != null ) ? this.props.project.initiated.desc : 'TBD'}</p>
                <br/>
                <ul>{out}</ul>
            </div>
        )
    }
}
/*
,
"initiated":{
          "desc":"",
          "list":[]
      }

      */
