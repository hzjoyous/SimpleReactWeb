import React, { Component } from 'react'
import echarts from 'echarts'
import chinaJson from './map/json/china.json'
import worldJson from './map/json/world.json'



export default class index extends Component {

    constructor(){
        super()
        this.state = {
            
        }
    }

    componentDidMount() {
        echarts.registerMap('china', chinaJson)
        echarts.registerMap('world', worldJson)

        this.myCharts = echarts.init(document.getElementById("simple-map-index"))

        this.myCharts.setOption({
            series: [{
                type: 'map',
                map: 'china'
            }]
        })
    }

    updateMap = () => {
        this.myCharts.setOption({
            series: [{
                type: 'map',
                map: 'world'
            }]
        })
    }

    render() {
        let sWidth = 1000
        let sHeight = 1000
        return (
            <>
                <button onClick={this.updateMap}>更换地图</button>
                <div id="simple-map-index" style={{ margin: '0 auto', width: sWidth, height: sHeight }}>
                    sss
                </div>
            </>
        )
    }
}
