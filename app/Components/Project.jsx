import React from 'react';
import styles from './projects.css';
import projects from '../data/projects.json';
import { Link } from 'react-router'
import ProjectSlideshow from './ProjectSlideshow';
import ProjectFocus from './ProjectFocus';
import ProjectInitiated from './ProjectInitiated';
import ProjectTimeline from './ProjectTimeline';
import ProjectStatistics from './ProjectStatistics';
import {StickyContainer} from 'react-sticky';
import HdrMenu from './HeaderMenu';

class ProjectDesc extends React.Component {
    render(){

        return (
            <div className={styles.projectDesc}>
                {this.props.project.desc}
            </div>
        )
    }
}

export default class Project extends React.Component {
    render(){
        var project =   projects.filter( (project)=>
                      {return project.id == this.props.params.projectID} )[0]
        var prevProject = projects.filter( (project)=>
          {return project.active && project.id < this.props.params.projectID} ).slice(-1)[0];
        var nextProject = projects.filter( (project)=>
          {return project.active && project.id > this.props.params.projectID} )[0];

        return (
            <StickyContainer>
                <HdrMenu >
                {project.shortDesc}
                </HdrMenu >

            <section className={ styles.projectDetailPage }>
                <div
                    className={ styles.navigationBlock }
                    >
                {(prevProject != null) ?
                    <Link
                        className={ styles.detailPrev }
                        to={`weProjects/${prevProject.id}`} >
                        {prevProject.shortDesc}
                    </Link>
                    : '' }
                {(nextProject != null) ?
                        <Link
                            className={ styles.detailNext }
                            to={`weProjects/${nextProject.id}`}
                            >
                            {nextProject.shortDesc}
                        </Link>
                    : '' }
                    </div>

                    {project.slideshow
                        ? <ProjectSlideshow projectID={project.id} slideshowName={project.slideshow} />:''}


                        <ProjectDesc project={project}/>

                    <div>
                        {project.focus
                            ? <ProjectFocus project={project}/>:''}

                        {project.statistics
                            ? <ProjectStatistics project={project}/>:''}

                        <ProjectInitiated project={project}/>

                        <ProjectTimeline project={project}/>
                    </div>
            </section>
        </StickyContainer>

    )
    }
}

/*
{project.slideshow
    ? <ProjectSlideshow projectID={project.id} slideshowName={project.slideshow} />:''}
*/
