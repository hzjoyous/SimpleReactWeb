import React, { Component } from 'react'
import echarts from 'echarts'

export default class index extends Component {
    constructor() {
        super()
        this.state = { width: 100, height: 100 }
    }

    funcList = () => {
        return [
            {
                name: 'y=x',
                func: (x) => {
                    return x
                }
            },
            {
                name: 'y=sin(x)',
                func: (x) => {
                    return Math.sin(x)
                }
            },
            {
                name: 'y=cos(x)',
                func: (x) => {
                    return Math.cos(x)
                }
            },
            {
                name: 'y=x^2',
                func: (x) => {
                    return x * x
                }
            },
            {
                name: 'y=2^x (位运算)',
                func: (x) => {
                    return 2 ^ x
                }
            },
            {
                name: 'y=0.5^x (位运算)',
                func: (x) => {
                    return 0.5 ^ x
                }
            },
            {
                name: 'y=0.5^x',
                func: (x) => {
                    return Math.pow(0.5, x)
                }
            },
            {
                name: "y=2^x",
                func: (x) => {
                    return Math.pow(2, x)
                }
            },
            {
                name: "y=1/x,(x>0)",
                func: (x) => {
                    if (Math.abs(x) < 0.0001) {
                        console.log(x)
                        return null
                    }
                    return 1 / x
                }
            },
            {
                name: "y=arccos(x)",
                func: (x) => {
                    return Math.acos(x)
                }
            },
            {
                name: "y=arcsin(x)",
                func: (x) => {
                    return Math.asin(x)
                }
            },
            {
                name: "y=arctan(x)",
                func: (x) => {
                    return Math.atan(x)
                }
            }

        ]
    }


    generateData(mathFunction = { name: "y=x", func: (x) => { return x } }, legend = 10) {
        let data = [];

        for (let i = -legend; i <= legend; i += 0.01) {
            data.push([i, mathFunction.func(i)]);
        }
        return data;
    }
    componentDidMount() {
        const baseHeight = 300
        const baseWidth = 300
        const baseInterval = 50
        var dataList = []
        var optionWidth = (baseWidth + baseInterval) * 2
        var optionHeight = baseHeight + baseInterval
        var gridList = []
        var xAxis = []
        var yAxis = []
        var series = []
        var titleList = []
        var num = 0

        this.funcList().forEach(mathFunction => {
            let columnNum = num % 2
            let rowNum = parseInt(num / 2)
            let data = this.generateData(mathFunction)
            titleList.push({
                text: mathFunction.name && (mathFunction.name),
                x: columnNum * (baseWidth + baseInterval) + (baseWidth + baseInterval / 2) / 2,
                y: rowNum * (baseHeight + baseInterval),
                textAlign: 'center',
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'normal'
                }
            })
            dataList.push(data)
            gridList.push({
                x: columnNum * (baseWidth + baseInterval),
                y: rowNum * (baseHeight + baseInterval) + baseInterval,
                width: baseWidth,
                height: baseHeight,
                containLabel: true
            })
            series.push({
                name: "name",
                type: 'line',
                showSymbol: false,
                clip: true,
                data: data,
                xAxisIndex: num,
                yAxisIndex: num
            })
            xAxis.push({
                gridIndex: num,
                name: 'x',
                minorTick: {
                    show: true
                },
                splitLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                minorSplitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            })
            yAxis.push({
                gridIndex: num,
                name: 'y',
                min: -12,
                max: 12,

                minorTick: {
                    show: true
                },
                splitLine: {
                    lineStyle: {
                        color: '#999'
                    }
                },
                minorSplitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            })

            num += 1
            if (num % 2 === 0) {
                optionHeight += baseHeight + baseInterval
            }

        });


        this.echarts = echarts.init(document.getElementById('math-function-index'))


        var baseOption = {
            title: titleList,
            tooltip: {},
            xAxis: xAxis,
            yAxis: yAxis,
            calculable: true,
            grid: gridList,
            series: series
        }


        this.echarts.setOption(baseOption)

        this.setState({
            height: optionHeight,
            width: optionWidth
        }, () => {
            this.echarts.resize()
        })

    }

    render() {


        return (
            <div id="math-function-index" style={{ margin: '0 auto', width: this.state.width, height: this.state.height }}>

            </div>
        )
    }
}
