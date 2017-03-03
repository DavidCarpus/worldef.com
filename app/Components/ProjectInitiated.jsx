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
            <div>
                <h2>Initiated</h2>
                { (this.props.project.initiated != null ) ? this.props.project.initiated.desc : 'TBD'}
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
