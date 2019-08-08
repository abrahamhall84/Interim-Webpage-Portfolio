import React, { Component } from 'react'
import Popover from 'react-simple-popover'


export class PopoverName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        
    }

    handleOnMouseEnter() {
        this.setState({open: !this.state.open})
    }
    
    handleOnMouseOut() { 
        this.setState({open: false})
    }
   
    render() {
        return(
            <div className='popoverContent'>
                <h2 className='introGreeting'>Hi! I'm</h2>
                    <h1 className='introName'>
                        <a
                            href='#'
                            ref='target'
                            onMouseEnter={this.handleOnMouseEnter.bind(this)}
                        >
                            Abraham Hall 
                        </a>
                    </h1>
                    <Popover
                        placement='right'
                        container={this}
                        target={this.refs.target}
                        show={this.state.open}
                        onHide={this.handleOnMouseOut.bind(this)}
                    >
                        <div className='git-link'><a href='https://github.com/abrahamhall84' target='_blank'>Git</a></div>
                        <div className='linkedIn-link'><a href='https://www.linkedin.com/in/abrahamhall84/' target='_blank'>LinkedIn</a></div>
                    </Popover>
                
            </div>
        )
    }
}




{/*export class IntroName extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            open: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState)
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        }
    }

    render() {
        return (
            <div className='intro-name'>
                <h2 className='intro-sentence'>Hi! I'm
                        <h1>
                            <u className='my-name' 
                                onMouseEnter={this.handleMouseHover}
                                onMouseLeave={this.handleMouseHover}
                            >
                                Abraham Hall
                            </u>
                        </h1>   
                 
                </h2>
                {
                    this.state.isHovering && 
                      <span className='link-box bubble'>
                          <div className='git-link'><a href='https://github.com/abrahamhall84' target='_blank'>Git</a></div>
                          <div className='linkedIn-link'><a href='https://www.linkedin.com/in/abrahamhall84/' target='_blank'>LinkedIn</a></div>
                      </span>
                }
            </div>
        )
    }
}
*/}