import React from 'react';
import styles from './BorderedLinkButton.css';

export default class BorderedLinkButton extends React.Component {
render(){
    return (
        <a className={styles.button} href={this.props.url}>
          {this.props.children}
        </a>
    )
}

    // const propTypes = {
    //   url:   (React.PropTypes.func.isRequired, React.PropTypes.string)
    // }
}
BorderedLinkButton.propTypes = {
  url:   React.PropTypes.string.isRequired
}
