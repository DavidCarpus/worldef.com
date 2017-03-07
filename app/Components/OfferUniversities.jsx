import React from 'react';
import styles from './WhatWeOffer.css';
import fa from 'font-awesome/css/font-awesome.css';

export default class OfferUniversities extends React.Component {

render(){
    const iconStyle={
        fontSize:'44px',
        margin:'0 50%'
    }
    return (
        <div  className={styles.universities} >
            <i className={[fa['fa-institution'],fa['fa']].join(' ')} style={iconStyle}></i>

            <h3>Universities</h3>
            <ul>
              <li>Student and faculty programs which foster academic enlightenment</li>
              <li>Opportunities to gain and transfer academic knowledge</li>
              <li>Opportunities to work and learn across borders</li>
              <li>Implementation of theory into practice</li>
              <li>On ramps for students exploration, learning and breakthroughs</li>
              <li>Cross-disciplinary collaboration between faculties and industry</li>
              <li>Creation of the 21st century learner</li>
              <li>Local and International job opportunities</li>
            </ul>
        </div>
    )
    }
}
