import React from 'react';
import styles from './team.css';
import team from '../data/team.json';
import TeamMemberThumbnail from './TeamMemberThumbnail';

export default class WeTeam extends React.Component {
render(){
    return (
        <section className={ styles.teamMain }>
            <h2>WE Team</h2>
              {team.filter( (teamMember)=> {return teamMember.active} ).
                  map(teamMember =>
                      <TeamMemberThumbnail
                          key={teamMember.id}
                          teamMember={teamMember}/>
                  )}

        </section>
    )
    }
}
