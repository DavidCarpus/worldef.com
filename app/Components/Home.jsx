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

export default class Home extends React.Component {
  render(){
      return(
    <div>
        <HdrMenu />
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
    </div>)
}
}
