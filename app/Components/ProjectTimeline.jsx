import React from 'react';
import styles from './projects.css';
import fa from 'font-awesome/css/font-awesome.css';

class TimelineBlock extends React.Component {
    render() {
        var element = this.props.blockData
        var leftSide=(this.props.index % 2 == 0)
        var side={
            float:(leftSide)?'left':'right',
            borderStyle: 'solid',
            borderRadius: '15px',
        }
        const iconStyle={
            fontSize:'44px',
            display: 'inline-block',
        }
        var blockContent=(
            <div
                style={ {
                    // backgroundColor: 'green',
                    borderRadius: '15px',
                }}>
                {element.desc}
                <br/>
                <br/>
                 {element.end ? `From ${element.start} to ${element.end}` : element.start}
            </div>
        )
        var icon = element.fa ? element.fa: 'fa-users'

        if (leftSide) {
            return (
                <div className= {styles.timelineBlock}>
                    <div key={this.props.index}
                        className= {styles.timelineBlockSide}
                        style={ {
                            float:'left',
                            // borderRightStyle: 'solid',
                        }}>
                        <div
                            className = {styles.timelineBlockContent}
                            style={side}
                            >
                            <div>
                                <i className={[fa[icon],fa['fa']].join(' ')} style={iconStyle}></i>
                            </div>
                        {blockContent}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className= {styles.timelineBlock}>
                    <div key={this.props.index}
                        className= {styles.timelineBlockSide}
                        style={ {
                            float:'right',
                            // borderLeftStyle: 'solid',
                        }}
                        >
                        <div
                            className = {styles.timelineBlockContent}
                            style={side}
                            >
                            <div>
                                <i className={[fa[icon],fa['fa']].join(' ')} style={iconStyle}></i>
                            </div>
                            {blockContent}

                        </div>
                </div>
            </div>
            );

        }
    }
}

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
                    <TimelineBlock  key={index} blockData={element} index={index}  />
            )
        }

        return (
            <div>
                <h2>Timeline</h2>
                <ul>
                    {out}
                </ul>
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
