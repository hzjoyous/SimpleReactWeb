import React, { Component } from 'react'
import {simpleHttp} from 'src/requests/request'

export default class index extends Component {
    render() {
        simpleHttp().then(resp=>{console.log(resp)})
        return (
            <div>
                404
            </div>
        )
    }
}
