import React from 'react';
import styles from './WeCollaborators.css';

export default class CollaboratorThumbnail extends React.Component {
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

    imageLink = (collaborator) => {
        if (collaborator.img) {
            var lnk=collaborator.img;
            return '<img src=' + lnk + ' />'
            // return '<img src=' + lnk + ' />'
        }
        return '***'
    }

    render(){
        var collaborator = this.props.collaborator;
        var img= this.state.hovered ? collaborator.imgC : collaborator.img

        return (
            <div className={styles.thumbnailBlock}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                >
                <a href={collaborator.url} target='_blank'>
                    <img
                        src={img}
                        style={{opacity: this.state.hovered ? 1 : 0.5}}
                        />
                </a >
            </div>
        )
    }
}
