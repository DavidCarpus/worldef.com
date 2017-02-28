import React from 'react';
import styles from './HeaderMenu.css';

export default class HeaderMenu extends React.Component {
    render(){
        return (
            <div className={ styles.menuHeader }>
                <div className={ styles.caption }>
                    <h1 className="logo">
                        <img className={ styles.logo } src="images/newWElogo_transparent_white.png" />
                        World Education Foundation</h1>
                    </div>
                </div>
        )
    }
}

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
