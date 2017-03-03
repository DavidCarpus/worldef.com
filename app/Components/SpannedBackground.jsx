import React from 'react';
import styles from './SpannedBackground.css';

export default class SpannedBackground extends React.Component {
render(){
     const imageStyle={
         backgroundImage: 'url(' + this.props.image + ')',
     }
    return (
        <div  className={styles.container} >
            <div
                style={imageStyle}
                className={styles.image}
                >
                {this.props.children}
            </div>
        </div>
    )
    }
}
