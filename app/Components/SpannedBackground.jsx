import React from 'react';
import styles from './SpannedBackground.css';

export default class SpannedBackground extends React.Component {
render(){
     const imageStyle={
         backgroundImage: 'url(' + this.props.image + ')',
     }
    return (
        <div  className={styles.style1} >
            <div
                style={imageStyle}
                className={styles.style2}
                >
                {this.props.children}
            </div>
        </div>
    )
    }
}
