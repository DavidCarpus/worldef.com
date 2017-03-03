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

// <BkgImg image="./images/WE-SHOWCASE-Gr--NN-Hj--rnet-1-7.jpg" />

export default class Home extends React.Component {

    onStickyStateChange(isSticky) {
      console.log(`Am I sticky?: ${ isSticky ? 'Yep!' : 'Nope!'}`);
    }
    // World Education Foundation

  render(){
      return(
            <StickyContainer>
                <HdrMenu >
                    World Education Foundation
                </HdrMenu >

                <BkgImg image="./images/WE-SHOWCASE-Gr--NN-Hj--rnet-1-7.jpg" />

                <MissionAndVision />

                <BkgImg image="./images/100years-22.jpg" />
                <WeProjects />

                <BkgImg image="./images/MG_4151.jpg" >
                <KafkaQuote />
                </BkgImg >

                <WhatWeOffer />
                <WeCollaborators />

                <WeTeam />
            </StickyContainer>
    )
}
}
