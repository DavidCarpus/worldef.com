import React from 'react';
import styles from './WhatWeOffer.css';

export default class OfferStudents extends React.Component {
render(){
    return (
    <div  className={styles.students} >
        <h3>Students / Practitioners</h3>
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