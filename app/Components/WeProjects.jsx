import React from 'react';
import styles from './projects.css';
import projects from '../data/projects.json';
import ProjectThumbnail from './ProjectThumbnail';

export default class WeMission extends React.Component {
render(){
    return (
        <section className={ styles.projectsMain }>
            <h2>WE projects</h2>
              {projects.map(project =>
                      <ProjectThumbnail project={project}
                          key={project.id}/>
                  )}

        </section>
    )
    }
}
