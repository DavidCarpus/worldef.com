import React from 'react';
import styles from './SpannedBackground.css';

export default class SpannedBackground extends React.Component {
render(){
     var imageStyle={
         backgroundImage: 'url(' + this.props.image + ')',
     }
     var paddingStyle={
        marginTop:'120px'
     }

    return (
        <div
            className={styles.container}
            style={paddingStyle}
            >
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
