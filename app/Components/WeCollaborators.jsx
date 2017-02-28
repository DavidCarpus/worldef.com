import React from 'react';
import collaborators from '../data/collaborators.json';
import styles from './WeCollaborators.css';
import CollaboratorThumbnail from './CollaboratorThumbnail';

export default class WeCollaborators extends React.Component {
render(){
    return (
        <section className={ styles.weCollaborators }>
            <h3>We Collaborators</h3>
            <ul>
              {collaborators.map(collaborator =>
                  <CollaboratorThumbnail
                      collaborator={collaborator}
                      key={collaborator.id}
                      />
                  )}
            </ul>
        </section>
    )
    }
}
