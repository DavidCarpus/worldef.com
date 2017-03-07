import React from 'react';
import styles from './WhatWeOffer.css';
import fa from 'font-awesome/css/font-awesome.css';
// require('font-awesome/css/font-awesome.css');


// style="font-size:44px;margin:0 50%;"

export default class OfferStudents extends React.Component {

render(){
    const iconStyle={
        fontSize:'44px',
        margin:'0 50%'
    }
    return (
    <div  className={styles.students} >
        <i className={[fa['fa-mortar-board'],fa['fa']].join(' ')} style={iconStyle}></i>
        <h3 >Students / Practitioners</h3>
        <ul>
            <li>Practical experience to support studies, research and work experience</li>
            <li>Opportunity to apply your academic knowledge and expert experience to make a tangible difference in the world</li>
            <li>Opportunity to become an effective Global Citizen</li>
            <li>Opportunities to work on the ground in different cultures and contexts</li>
            <li>Self exploration to explore your life’s passions and purpose</li>
            <li>Explore and share new innovative solutions, which can be transferred around the world</li>
        </ul>
    </div>
    )
    }
}
