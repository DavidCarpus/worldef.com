import React from 'react';
import styles from './WhatWeOffer.css';
import BorderedLinkButton from './BorderedLinkButton';

export default class WeRecruit extends React.Component {
render(){
    return (
        <div className={styles.weRecruit}>
            <p >
              We are constantly looking for talented students, professionals and passionate people to join us on the WE mission.
            </p>
            <BorderedLinkButton url="http://worldef.com/recruit/">We Recruit</BorderedLinkButton>
        </div>
    )
    }
}

// <a className={styles.weRecruitButton} href="http://worldef.com/recruit/">
//   We Recruit
// </a>
