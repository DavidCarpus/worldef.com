import React from 'react';
import styles from './projects.css';

export default class ProjectTimeline extends React.Component {
    render(){
        var out = ''
        // out = JSON.stringify(this.props.project.initiated);
        if (this.props.project.timeline != null ) {
            out = this.props.project.timeline.
                sort((a, b) => {
                      return a.order - b.order;
                  }).
                map( (element, index) =>
                <li key={index}>{element.start} - {element.end} . . {element.desc}</li>
            )
        }

        return (
            <div>
                <h2>Timeline</h2>
                <ul>{out}</ul>
            </div>
        )
    }
}
/*
,
"timeline":
    [
        {"order":1,
        "desc":"DESK RESEARCH",
        "start":"2015-03-01", "end":"2015-04-01"
        },
    ],
      */
