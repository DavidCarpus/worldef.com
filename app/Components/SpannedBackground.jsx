import React from 'react';
import styles from './SpannedBackground.css';

export default class SpannedBackground extends React.Component {
render(){
     var imageStyle={
         backgroundImage: 'url(' + this.props.image + ')',
     }
     var paddingStyle={
     }
     if (this.props.padding) {
          paddingStyle.paddingTop= this.props.padding
     }
     if (this.props.position) {
          imageStyle.backgroundPosition= this.props.position
        //   imageStyle.height= '400px'
     }
     if (this.props.height) {
          paddingStyle.height= this.props.height
        //   imageStyle.height= '400px'
     }

    //  console.log(JSON.stringify(paddingStyle));
    //  console.log(JSON.stringify(imageStyle));

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
