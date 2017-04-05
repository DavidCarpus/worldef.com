import React from 'react';
// import styles from './projects.css';
import styles from './ProjectThumbnail.css';
import { Link } from 'react-router'

export default class ProjectThumbnail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        hover:false
    };
  }


    imageLink = (proj) => {
        if (proj.img) {
            var lnk='./images/projects/' +proj.img+ '.png';
            var results= '<img src=' + lnk + ' />'
            // var results= lnk;
            return lnk;
        }
        return '***'
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
    render(){
        var proj = this.props.project;
        var projRef = 'weProjects/' + proj.id;
        return (
            <div className={[styles.projectThumbnail, styles.tooltip].join(' ')}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                >
                <Link to={projRef}>
            <img
                src={this.imageLink(proj)}
                style={{opacity: this.state.hovered ? 1 : 0.5}}
                />
        </Link >
        <span className={ styles.tooltiptext }
            style={{visibility: this.state.hovered ? 'visible' : 'hidden'}}
            >
            {proj.tooltip ? proj.tooltip : proj.shortDesc }
        </span>
            </div>
        )
    }
}


// function project_thumbnail($projectID)
// {
//   $project = find_projects_member($projectID);
//   $results = "<div class='projectThumbnail tooltip'>";
//   $results .= "<a href='weProjects/" . $projectID . "'>";
//   if ($project['img'] != null) {
//     $results .=  "<img src='images/projects/" . $project['img'] . ".png'";
//     $results .=   "onmouseover='style=\"opacity:1;\"'";
//     $results .=   "onmouseout='style=\"opacity:0.5;\"'";
//     $results .=  " />";
//   }
// //  $results .= "<div class='shortDesc'>" . $project['shortDesc'] . "</div>";
//   $results .=  "</a>";
//   $results .=  "<span class='tooltiptext'>";
//   if ($project['tooltip'] != null) {
//     $results .= $project['tooltip'];
//   } else {
//     $results .=  $project['shortDesc'];
//   }
//   $results .=  "</span>";
//   $results .=  "</div>\n";
//   return $results;
// }
