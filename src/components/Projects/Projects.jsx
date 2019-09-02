import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h4 className='project-title'>Projects</h4>
                <div><a href='http://ahtimepiece.netlify.com/' target='_blank' rel='noopener noreferrer'>Project 1</a></div>
                <div><a href='http://ahtictactoe.netlify.com/' target='_blank' rel='noopener noreferrer'>Project 2</a></div>
                <div><a href='http://eatingrightforyourbloodtype.netlify.com/' target='_blank' rel='noopener noreferrer'>Project 3</a></div>
            </div>
        )
    }
}