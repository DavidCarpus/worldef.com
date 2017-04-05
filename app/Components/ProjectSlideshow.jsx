import React from 'react';
import styles from './projectSlideshow.css';
import slideshow from '../data/slideshow.json'
var classNames = require('classnames');

export default class ProjectSlideshow extends React.Component {
    translateImgToURI(img){
        if (img.toUpperCase().endsWith('.PNG') || img.toUpperCase().endsWith('.JPG')) {
            return 'images/projects/'+img;
        } else {
            // https://confluence.biola.edu/display/itservices/How+to+Embed+Images+from+Google+Drive+in+a+Web+Page
            return 'http://drive.google.com/uc?export=view&id=' + img;
        }
    }

    loadURLs(slideshowName){
        var currentProject = (this.state && this.state.currentProject) || 0;
        if(currentProject == slideshowName && this.state.data != null) {
            return this.state.data;
        }
        var images = slideshow.filter( (image)=> {return image.name ==slideshowName} )
        if (images.length ) { images = images[0].images }
        var slideshowData =
             images.
             sort((a, b) => {
               return a.order - b.order;
             }).
             map( (image, index) => {
               return {
                   'url': this.translateImgToURI(image.img),
                   'id':index
               }
             } );

             return slideshowData;
    }

    constructor(props) {
        super(props);
            var slideshowData = this.loadURLs(props.slideshowName)

            this.state = {
                data:slideshowData,
                currentProject:props.slideshowName,
                displayID: 1
            };
    }

    componentDidMount() {
       var intervalId = setInterval(this.timer.bind(this), 5000);
       this.setState( {
           // store intervalId in the state so it can be accessed later:
           intervalId: intervalId
       });
    }

    componentWillUnmount() {
       // use intervalId from the state to clear the interval
       clearInterval(this.state.intervalId);
    }

    timer() {
       // setState method is used to update the state
        var displayID = this.state.displayID || 0;
        if (displayID >= (this.state.data != null ? this.state.data.length: 0) - 1) {
            displayID = 0
        }
        displayID += 1;
        var slideshowData = this.loadURLs(this.props.slideshowName)
       this.setState({
           data:slideshowData,
            displayID: displayID,
            currentProject: this.props.slideshowName
        });
        // console.log(this.state);
        // console.log(this.__proto__.constructor.name + ':timer()' );
        // console.log('(' + displayID + ')' );
        // if (this.state.data != null) { console.log( displayID + 'of' + this.state.data.length );}
    }

  render () {
      var style1 = {
          width:'100%',
          height:'400px'
      };

    var figures = '';
    var slideshowData = this.state.data
    var displayID= this.state.displayID
    var currentProject= this.state.currentProject

    if (slideshowData == null || currentProject != this.props.slideshowName){
        console.log('Force load slideshowData ' + this.props.slideshowName);
        slideshowData = this.loadURLs(this.props.slideshowName)
        displayID=1
        currentProject = this.props.slideshowName
    }
    // http://andrewhfarmer.com/detect-image-load/
        //   onLoad={this.handleImageLoaded.bind(this)}
        //   onError={this.handleImageErrored.bind(this)}

    if (slideshowData != null){
        if (currentProject == this.props.slideshowName) {
            // console.log('Load images: ' + this.props.slideshowName);
            figures = slideshowData.
            filter( (image)=> {return image.id ==displayID} ).
            map( (image) =>
                <figure key={image.id}>
                        <img src={image.url}  />
                </figure>
            );
        } else {
            console.log('skipping... project ' + this.props.slideshowName + ' not equal to ' + currentProject);
            figures = ''
        }
    }

    return (
        <div style={style1}>
            <div className={styles.container} >
                {figures}
            </div>
    </div>
    );
  }
}
//
// var settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };
