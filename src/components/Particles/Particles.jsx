import React, { Component } from 'react'
import Particles from 'react-particles-js'



const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: 'random'
    },
    shape: {
      type: ['star', 'circle'],
      stroke: {
        width: 5,
        color: '#222222'
      }
    },
    opacity: {
      value: 0.8,
      random: true, 
      anim: {
        enable: true,
        speed: 4,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 9, 
      random: true, 
      anim: {
        enable: true, 
        speed: 6,
        size_min: 0.5,
        sync: false
      }
    },
    move: {
      direction: 'bottom',
      random: true,
      straight: true,
      out_mode: 'out'
    }
  }
  
  }

export class ParticlesArea extends Component {
    render() {
      return <Particles params={particlesOptions} />;
    }
  }

  /*
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 200
      }
    },
    "color": {
      "value": "#3bb9d3"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 5,
        "color": "#6c35bb"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 7.891476416322726,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 143.73766657733808,
        "size_min": 5.684540486109416,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
    
  */