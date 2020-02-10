import React, { Component } from 'react'
import { BackHome } from '@/components'
import QRCode from 'qrcode.react'
export default class index extends Component {
    routePath = 'about'
    render() {
        return (
            <div>
                <br/>
                <QRCode value="猜猜我是谁"/>
                <br/>
                <BackHome />
            </div>
        )
    }
}
