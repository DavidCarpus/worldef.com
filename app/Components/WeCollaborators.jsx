import React from 'react';
import collaborators from '../data/collaborators.json';
import styles from './WeCollaborators.css';
import CollaboratorThumbnail from './CollaboratorThumbnail';
import BorderedLinkButton from './BorderedLinkButton';

export default class WeCollaborators extends React.Component {
render(){
    return (
        <section className={ styles.weCollaborators }>
            <h2>We Collaborators</h2>
            <ul>
              {collaborators.map(collaborator =>
                  <CollaboratorThumbnail
                      collaborator={collaborator}
                      key={collaborator.id}
                      />
                  )}
            </ul>
            <div className={styles.buttonBar}>
                <BorderedLinkButton url="https://wefoundation.typeform.com/to/eDMXH0"> Collaborate </BorderedLinkButton>
                    <BorderedLinkButton url="http://worldef.com/donate/"> Donate </BorderedLinkButton>
            </div>

        </section>
    )
    }
}

/*
<BorderedLinkButton url="https://wefoundation.typeform.com/to/eDMXH0"> Collaborate </BorderedLinkButton>
    <BorderedLinkButton url="http://worldef.com/donate/"> Donate </BorderedLinkButton>

*/
