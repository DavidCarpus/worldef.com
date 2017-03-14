import React from 'react';
import styles from './team.css';
import team from '../data/team.json';
import { Link } from 'react-router'
import HdrMenu from './HeaderMenu';
import {StickyContainer} from 'react-sticky';

class TeamMemberTextHeader extends React.Component {
    render(){
        return (
            <div>
                {this.props.teamMember.name}
            <br/>
            {this.props.teamMember.title}
        </div>
        );
    }
}
class NavigationBlock extends React.Component {
    render(){
        var teamMember =   team.filter( (teamMember)=>
                      {return teamMember.id == this.props.teamMemberID} )[0]
        var prevMember = team.filter( (teamMember)=>
            {return teamMember.active && teamMember.id < this.props.teamMemberID} ).slice(-1)[0];
        var nextMember = team.filter( (teamMember)=>
            {return teamMember.active && teamMember.id > this.props.teamMemberID} )[0];
        return (
            <div
                className={ styles.navigationBlock }
                >
                <div
                    className={ styles.navigationBlock }
                    >
                {(prevMember != null) ?
                    <Link
                        className={ styles.detailPrev }
                        to={`teamMember/${prevMember.id}`} >
                        {prevMember.name}
                    </Link>
                    : '' }
                {(nextMember != null) ?
                        <Link
                            className={ styles.detailNext }
                            to={`teamMember/${nextMember.id}`}
                            >
                            {nextMember.name}
                        </Link>
                    : '' }
                    </div>
                </div>
        );
    }
}

export default class TeamMember extends React.Component {
    imageLink = (team) => {
        if (team.img) {
            var lnk=team.img;
            return 'images/team/' + lnk + '.jpg';
            // return '<img src=' + lnk + ' />'
        }
        return '***'
    }
    team_member_text = (team) => {
        if (team.text) {
            return team.text;
        }
        return 'Team Member Details'
    }
render(){
    var teamMember =   team.filter( (teamMember)=>
                  {return teamMember.id == this.props.params.teamMemberID} )[0]
    var teamMemberText=this.team_member_text(teamMember);
    var headerText = teamMember.name + ' - ' +  teamMember.title
    return (
        <StickyContainer>

                <section className={ styles.teamMain }>
                    <HdrMenu >
                    <TeamMemberTextHeader teamMember={teamMember} />
                    </HdrMenu >

                    <div className={ styles.teamDetailPhoto } >
                        <img  src={this.imageLink(teamMember)} />
                    </div>
                    <NavigationBlock teamMemberID={this.props.params.teamMemberID}/>

                        <div className={ styles.teamDetailText } >
                            <p dangerouslySetInnerHTML={{__html: teamMemberText}} ></p>
                        </div>

        </section>
    </StickyContainer>
    )
    }
}
// <ItemPageNavigation label={nextMember.name}>
