import React from 'react';
import styles from './WhatWeOffer.css';
import fa from 'font-awesome/css/font-awesome.css';

export default class OfferCompanies extends React.Component {

render(){
    return (
        <div  className={styles.companies} >
            <div className={styles.icon}>
                <i className={[fa['fa-gears'],fa['fa'], styles.icon].join(' ')} ></i>
            </div>
            <h3>Companies</h3>
            <ul>
                <li>Can learn about communities across borders</li>
                <li>Explore effective solutions where business expertise can be transferred to creating socially responsible programs</li>
                <li>Gain a foot on the ground in unexplored markets</li>
                <li>Organize with strong, reliable local partners</li>
                <li>Grow internal knowledge through providing employees diverse learning opportunities</li>
                <li>Work with locals in global communities to develop new products and services</li>
            </ul>
        </div>
    )
    }
}
