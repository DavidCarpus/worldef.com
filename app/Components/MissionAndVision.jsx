import React from 'react';

import styles from './MissionAndVision.css';

class WeMission extends React.Component {
render(){
    return (
        <section className={ styles.mission } >
            <h3>WE Mission</h3>
            <p>The WE Foundation bridges the gap between academic and expert knowledge and their implementation in local communities around the world. WE are creating the classrooms, learners and livelihoods of tomorrow to help societies sow the ideas and grow the solutions to their most pressing issues. Using toolkits like the WE:SOLVE Labs, our associates craft workable solutions and build global collaborations, ultimately generating new market opportunities. By collecting large amounts of anonymized data from each project, WE are also building a larger picture which helps us make better connections and more tailored programs for each new community we interact with. Essentially, WE help share the best proven practices across all kinds of borders and boundaries to promote and secure peace through education.</p>
        </section>
    )
    }
}
class WeVision extends React.Component {
render(){
    return (
        <section className={ styles.vision }>
            <h3>WE Vision</h3>
            <p>WE are working to help global communities reshape themselves through the use of technology and education. In the field, WE focus on opening up opportunities for research and learning, which in turn cultivates understanding and leads to better informed solutions. We strongly believe that through the wide spread application of knowledge, collaboration and empathy, humanity as a whole is capable of moving to the next level of perception and action, thereby achieving peace in this generation. This is of course a mighty task and the work involved will be monumental, but WE propose that with todays level of interconnectedness and the feedback loop between humans and technology, it is well within our collective reach.</p>
        </section>
    )
    }
}


export default class MissionAndVision extends React.Component {
render(){
    return (
        <div className={ styles.missionandvision }>
            <h2 >BUILDING PEACE THROUGH EDUCATION AND TECHNOLOGY</h2>
            <WeMission />
            <WeVision />
        </div>
    )
    }
}
