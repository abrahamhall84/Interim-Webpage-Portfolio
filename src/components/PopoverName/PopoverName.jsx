import React, { Component } from 'react'
import Popover from 'react-simple-popover'
import './PopoverName.css'

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
        this.setState({open: {delay: 100}})
    }
    
    render() {
        return(
            <div className='popoverContent'>
                <h2 className='introGreeting'>Hi! I'm</h2>
                    <h1 className='introName'>
                        <a href='#'
                            ref='target'
                            onMouseEnter={this.handleOnMouseEnter.bind(this)}
                        >
                            {this.props.name}
                        </a>
                    </h1>
                    <Popover
                        placement='right'
                        container={this}
                        target={this.refs.target}
                        show={this.state.open}
                        onHide={this.handleOnMouseOut.bind(this)}
                
                    >
                        <div className='git-link'><a href='https://github.com/abrahamhall84' target='_blank' rel='noopener noreferrer'>Git</a></div>
                        <div className='linkedIn-link'><a href='https://www.linkedin.com/in/abrahamhall84/' target='_blank' rel='noopener noreferrer'>LinkedIn</a></div>
                    </Popover>
                
            </div>
        )
    }
}
