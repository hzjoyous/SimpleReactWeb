import React, { Component } from 'react'
import {NavLink as Link} from 'react-router-dom'
import { DefaultButton } from 'office-ui-fabric-react'


export default class index extends Component {
    render() {
        return (
            <>
            <div className="App" style={{ margin: '0 auto', width: "100%", height: "100%" }}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/simpleMap">SimpleMap</Link></li>
                        <li><Link to="/mathFunction">初等函数</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/404">NotFound</Link></li>
                        <li><Link to="/three">Three</Link></li>
                    </ul>
                <DefaultButton>真正的首页</DefaultButton>
                
                    <div style={{ margin: '0 auto' }}>
                        <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备17063724号-1</a>
                    </div>
                </div>
            </>
        )
    }
}
