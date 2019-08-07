import React, { Component } from 'react'

export class IntroName extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false
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
                <h2 className='intro-sentence'>
                    Hi! I'm  
                    <u className='my-name' 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    >Abraham Hall
                    
                    </u>
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
