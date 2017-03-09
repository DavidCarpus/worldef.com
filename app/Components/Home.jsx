import React from 'react';
import ReactDOM from 'react-dom';
import HdrMenu from './HeaderMenu';
import BkgImg from './SpannedBackground';
import MissionAndVision from './MissionAndVision';
import WeProjects from './WeProjects';
import KafkaQuote from './KafkaQuote';
import WhatWeOffer from './WhatWeOffer';
import WeCollaborators from './WeCollaborators';
import WeTeam from './WeTeam';
import {StickyContainer} from 'react-sticky';
import fa from 'font-awesome/css/font-awesome.css';
import styles from './ContactOptions.css';

class ContactOptions extends React.Component {
    render(){
        const tumblr={ color: 'red' }
        const twitter={ color: '#1da1f2' }
        const facebook={ color: '#4267b2' }


        return(
            <div >
                <div className={styles.socialMedia}>
                    <a href='http://www.twitter.com/W_E_Foundation'>
                    <i className={[fa['fa-twitter-square'],fa['fa'], styles.iconStyle].join(' ')}
                        style={twitter}></i>
                    </a>
                    <a href='https://www.facebook.com/WEFoundation/?fref=ts'>
                    <i className={[fa['fa-facebook-official'],fa['fa'],styles.iconStyle].join(' ')}
                        style={facebook}></i>
                    </a>
                    <a href='http://www.globalmarques.tumblr.com/'>
                    <i className={[fa['fa-tumblr-square'],fa['fa'],styles.iconStyle].join(' ')}
                        style={tumblr}></i>
                    </a>
                </div>
                <div className={styles.traditional}>
                        <p><i className={[fa['fa-envelope'],fa['fa']].join(' ')}></i> - post@worldef.Com</p>
                        <p><i className={[fa['fa-phone'],fa['fa']].join(' ')}></i> -WE Foundation org. number 915 548 423</p>
                        <p>EIN number: 80-0332342</p>
                </div>
            </div>
        )
    }

}

export default class Home extends React.Component {

    onStickyStateChange(isSticky) {
      console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
    }
    // World Education Foundation

  render(){
    //   <WeProjects />
    // <KafkaQuote />
      const currYear=new Date().getFullYear()
      return(
            <StickyContainer>
                <HdrMenu >
                    World Education Foundation
                </HdrMenu >

                <BkgImg
                    image="./images/WE-SHOWCASE-Gr--NN-Hj--rnet-1-7.jpg"
                    position='0px 80px'
                    padding='0px'
                    height='701px'
                    />

                    <MissionAndVision />

                    <BkgImg
                        image="./images/100years-22.jpg"
                        padding='0px'
                        position='0px 80px'
                        height='502px'
                        />
                    
                    <WeProjects />

                    <BkgImg image="./images/MG_4151.jpg"
                        padding='20px'
                        height='503px'
                        >
                        <KafkaQuote />
                    </BkgImg >

                    <WhatWeOffer />
                    <WeCollaborators />

                    <WeTeam />
                    <ContactOptions />
                    &copy; {currYear} World Education Foundation

            </StickyContainer>
    )
}
}

/*
                <MissionAndVision />

                <BkgImg
                    image="./images/100years-22.jpg"
                    padding='0px'
                    position='0px 80px'
                    height='502px'
                    />
                    <WeProjects />


                <BkgImg image="./images/MG_4151.jpg"
                    padding='20px'
                    height='503px'
                    >
                    <KafkaQuote />
                </BkgImg >

                <WhatWeOffer />
                <WeCollaborators />

                <WeTeam />
                <ContactOptions />
                &copy; {currYear} World Education Foundation

                */
