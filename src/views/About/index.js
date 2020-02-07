import React, { Component } from 'react'
import { BackHome } from '@/components'
export default class index extends Component {
    goHome = () => {
        this.props.history.push({
            pathName: '/home',
            state: {
                id: 1
            }
        })
    }

    render() {
        return (
            <div>
                about
                <BackHome />
            </div>
        )
    }
}
