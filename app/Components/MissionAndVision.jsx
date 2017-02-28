import React from 'react';
import WeMission from './WeMission';
import WeVision from './WeVision';
import styles from './MissionAndVision.css';

export default class MissionAndVision extends React.Component {
render(){
    return (
        <div className={ styles.missionandvision }>
            <h2>BUILDING PEACE THROUGH EDUCATION AND TECHNOLOGY</h2>
            <WeMission />
            <WeVision />
        </div>
    )
    }
}
