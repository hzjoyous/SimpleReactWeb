import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Menu, Icon, BackTop } from 'antd'
import './App.less'

export default class App extends Component {

    constructor() {
        super()
        if (document.hidden !== undefined) {
            var defaultTitle = document.title || '';
            document.addEventListener('visibilitychange', () => {
                switch (document.visibilityState) {
                    case 'visible':
                        document.title = defaultTitle
                        break
                    default:
                        document.title = ('( ╯□╰ )')
                }
                console.debug(document.hidden)
            })
        }
    }

    render() {
        return (
            <div className="App" style={{ margin: '0 auto', width: "100%", height: "100%" }}>
                <Menu mode="horizontal">
                    <Menu.Item><Link to="/home"><Icon type="home" />Home</Link></Menu.Item>
                    <Menu.Item><Link to="/simpleMap"><Icon type="fire" />SimpleMap</Link></Menu.Item>
                    <Menu.Item><Link to="/mathFunction"><Icon type="fire" />初等函数</Link></Menu.Item>
                    <Menu.Item><Link to="/about"><Icon type="fire" />About</Link></Menu.Item>
                    <Menu.Item><Link to="/404"><Icon type="fire" />NotFound</Link></Menu.Item>
                </Menu>
                <BackTop />
                <div style={{ margin: '0 auto' }}>
                    <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备17063724号-1</a>
                </div>
            </div>
        )
    }
}
