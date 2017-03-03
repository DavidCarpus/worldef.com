import React from 'react';
// import Slider from 'react-slick';
import styles from './projectSlideshow.css';
import slideshow from '../data/slideshow.json'
var classNames = require('classnames');

var Slides = React.createClass({
  render: function() {
    var slidesNodes = this.props.data.map(function (slideNode, index) {
    var isActive = this.state.currentSlide === index;
      return (
        <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} action={slideNode.action} actionHref={slideNode.actionHref} />
      );
    });
    return (
      <div className="slides">
        {slidesNodes}
      </div>
    );
  }
});

var Slide = React.createClass({
  render: function() {
    var classes = classNames({
      'slide': true,
      'slide--active': this.props.active
    });
    return (
      <div className={classes}>
        <img src={this.props.imagePath} alt={this.props.imageAlt} />
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.text}</p>
        <a href={this.props.actionHref}>{this.props.action}</a>
      </div>
    );
  }
});

export default class ProjectSlideshow extends React.Component {

  slideshow(slideshowData) {
      if (slideshowData != null ) {
          return (
              slideshowData.images.sort((a, b) => {
                  return a.order - b.order;
              }).
              filter( (image)=> {return image.order == 2} ).
              map( (image, index) =>
              <figure key={index}>
                  <img src={`images/projects/${image.img}`}  />
              </figure>
              )
          )
      } else {
          return ('')
      }

    }


  render () {
      var slideshowData = slideshow.filter( (image)=> {return image.id == this.props.projectID} )[0];

      var style1 = {
          width:'100%',
          height:'400px'
      };
    //
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    return (
        <div style={style1}>
            <div className={styles.container} >
                {this.slideshow(slideshowData)}
            </div>
    </div>
    );
  }
}

// <Slider {...settings}>
//   <div><img src='http://placekitten.com/g/400/200' /></div>
//   <div><img src='http://placekitten.com/g/400/200' /></div>
// </Slider>

// import 'react-image-gallery/styles/css/image-gallery.css';
// import ImageGallery from 'react-image-gallery';
//
// export default class ProjectSlideshow extends React.Component {
//   handleImageLoad(event) {
//     console.log('Image loaded ', event.target)
//   }
//
//   render() {
//     const images = [
//       {
//         original: 'http://lorempixel.com/1000/600/nature/1/',
//         thumbnail: 'http://lorempixel.com/250/150/nature/1/',
//       },
//       {
//         original: 'http://lorempixel.com/1000/600/nature/2/',
//         thumbnail: 'http://lorempixel.com/250/150/nature/2/'
//       },
//       {
//         original: 'http://lorempixel.com/1000/600/nature/3/',
//         thumbnail: 'http://lorempixel.com/250/150/nature/3/'
//       }
//     ]
//
//     return (
//       <ImageGallery
//         items={images}
//         slideInterval={2000}
//         onImageLoad={this.handleImageLoad}/>
//     );
//   }
// }

//
// export default class ProjectSlideshow extends React.Component {
//
//     render(){
//         var slideshowData = slideshow.filter( (image)=> {return image.id == this.props.projectID} )[0];
//
//         return (
//             <div  id='projectSlideshow'>
//                 <div className={styles.bssslides} >
//                     {slideshowData.images.sort((a, b) => {
//                         return a.order - b.order;
//                     }).map(image =>
//                         <figure>
//                             <img src={`images/projects/${image.img}`}  />
//                         </figure>
//                     )}
//                 </div>
//             </div>
//             )
//         }
// }
// <figcaption>$caption</figcaption>
