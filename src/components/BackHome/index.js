import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'

class BackHome extends Component {
    goHome = () => {
        this.props.history.push({
            pathname: '/home',
            state: {
                id: '1'
            }
        })
    }
    render() {
        return (
            <Button onClick={this.goHome}>返回首页</Button>
        )
    }
}

export default withRouter(BackHome)