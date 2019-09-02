import React, { Component } from 'react'
import { PopoverName } from '../PopoverName/PopoverName.jsx'

export class IntroTitle extends Component {
    render() {
        return (
            <div className='intro-name'>
                <PopoverName name='Abraham Hall' />
            </div>
        )
    }
}
