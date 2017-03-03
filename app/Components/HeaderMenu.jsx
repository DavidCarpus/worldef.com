import React from 'react';
import styles from './HeaderMenu.css';
import ReactDOM from 'react-dom';
import { Sticky } from 'react-sticky';

// onStickyStateChange={this.onStickyStateChange.bind(this)}

export default class HeaderMenu extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        headerStyle: {
            color: 'black'
        }
      }
    }

    onStickyStateChange(isSticky) {
    //   console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
          this.setState(
              {
                headerStyle: {
                    color: (isSticky)?'white':'black',
                    backgroundColor: (isSticky)?'black':'',
                    height: (isSticky)?'80px':'',
                }
              }
          )
    }
    // <div className={ styles.menuHeader }>
    // topOffset={300}
    // <div className={ styles.caption }>

    render(){
        // var out = JSON.stringify(this.state.headerStyle);
        // console.log(out);
        var style = this.state.headerStyle;
        return (
            <Sticky
                onStickyStateChange={this.onStickyStateChange.bind(this)}
                >
            <header style={style} className={ styles.menuHeader }>
                <div className={styles.logo}>
                    <div className={styles.logoImage}>
                        <img src="images/newWElogo_transparent_white.png" />
                            <div className={styles.text}>{ this.props.children }</div>
                    </div>
                </div>
                </header>
            </Sticky>

        )
    }
}
  // var node = this.getDOMNode();
  // this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  //
/*
export default () => (
    <div id="mainMenuHeader"  >
        <div className="caption">
            <h1 className="logo">
                World Education Foundation</h1>

        </div>
    </div>
)
*/
