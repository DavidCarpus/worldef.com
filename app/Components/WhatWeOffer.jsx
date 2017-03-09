import React from 'react';
import OfferStudents from './OfferStudents';
import OfferCompanies from './OfferCompanies';
import OfferUniversities from './OfferUniversities';
import WeRecruit from './WeRecruit';
import styles from './WhatWeOffer.css';

export default class WhatWeOffer extends React.Component {
render(){
    return (
        <div className={styles.whatWeOfferMain}>
            <h2>What We Offer</h2>
            <OfferStudents />
            <OfferCompanies />
            <OfferUniversities />
        </div>
    )
    }
}
