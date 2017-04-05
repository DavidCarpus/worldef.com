import React from 'react';
import styles from './team.css';
import { Link } from 'react-router'

export default class TeamMemberThumbnail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        hover:false
    };
}
 onMouseOver =  () =>{
         this.setState({
             hovered: true
         })
    }

    onMouseOut =  () =>{
        this.setState({
            hovered: false
        })
    }

    imageLink = (team) => {
        if (team.img) {
            var lnk=team.img;
            return 'images/team/' + lnk + '_tn.jpg';
            // return '<img src=' + lnk + ' />'
        }
        return '***'
    }

    detailLink = (team) => {
        // return 'teamMember/' ;
        return 'teamMember/' + team.id;
    }

    render(){
        var teamMember = this.props.teamMember;
        var img= this.state.hovered ? teamMember.imgC : teamMember.img
        var labelStyle='';
        if (this.state.hovered) {
            labelStyle={
                color:'black',
                // color:'white',
                // color:'red',
                opacity: 0.85,
                backgroundColor:'#CCC',
            };
        }else {
            labelStyle={
                opacity: 0.65,
                color:'black',
                // backgroundColor:'black',
                } ;
        }
        var detailLink=this.detailLink(teamMember);

        return (
            <div className={styles.thumbnailBlock}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                key={teamMember.id}
                >
                <Link to={detailLink}>
                <img
                    src={this.imageLink(teamMember)}
                    style={{opacity: this.state.hovered ? 1 : 0.5}}
                    />
                <div
                    className={styles.labelblock}
                    style={labelStyle}
                    >
                    <div className={styles.thumbName}>{teamMember.name}
                        <hr/>
                        </div>
                    <div className={styles.thumbTitle}>{teamMember.title}</div>
                </div>
            </Link>
            </div>
        )
    }
}
/*

*/
